import {Rule, RuleObject, RuleRender } from 'antd/es/form';
import dayjs from "dayjs";


export const regexPatterns: { [key: string]: RegExp } = {
  oneUpperCase: /[A-Z]+/,
  oneLowerCase: /[a-z]+/,
  oneNumber: /\d/,
  oneSymbol: /[*@!#%&$_+=?.<>;:'"/()^~{}]+/,
  positiveNumbers: /^(0\.1|[1-9]\d*(\.\d+)?)$/,
  letters8: /.{6,}/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumber: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  domainName: /^((?!-)[A-Za-z0-9-]{1,63}(?!-)\.)+[A-Za-z]{2,6}$/,
  url: /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/,
  fax: /^\+?[0-9]{7,}$/,
  onlyWhiteSpace: /.*[^ ].*/,
  startEndWhiteSpace: /^\s|\s$/,
  notNumAndLetter: /^[^A-Za-z0-9]+$/,
  onlyEnglishLetters: /^[a-zA-Z\s]*$/,
};

export const passwordValidationRegex: RuleObject[] = [
  // { type: 'regexp', pattern: regexPatterns.oneUpperCase },
  // { type: 'regexp', pattern: regexPatterns.oneLowerCase },
  // { type: 'regexp', pattern: regexPatterns.oneNumber },
  // { type: 'regexp', pattern: regexPatterns.oneSymbol },
  { type: 'regexp', pattern: regexPatterns.letters8 },
];

export const passwordValidator = (
  value: string,
  rulesCount: number,
): boolean => {
  let count = 0;
  passwordValidationRegex.forEach((rule: RuleObject) => {
    if (rule.pattern?.test(value)) {
      count += 1;
    }
  });
  if (count >= rulesCount) {
    return true;
  }
  return false;
};

export type TValidationRules = {
  password: Rule[];
  passwordConfirm: RuleRender[];
  withoutSpace: (fieldName?: string) => Rule;
  acceptTerms: Rule[];
  startTime: Rule[];
  endTime: Rule[];
  required: (fieldName?: string) => Rule;
  email: () => Rule;
  phoneNumber: () => Rule;
  onlyEnglishLetters: () => Rule;
  url: () => Rule;
  fax: () => Rule;
  integerOptional: () => Rule;
  verificationCode: () => Rule;
  startDateTime: Rule[];
  endDateTime: Rule[];
  maxChars: (count: number, fieldName: string) => Rule;
  minChars: (count: number, fieldName: string) => Rule;
};

export const validationRules: TValidationRules = {
  required: fieldName => ({
    validator(_: RuleObject, value) {
      if (
        (typeof value === 'string' && value.trim()) ||
        (typeof value !== 'string' && !!value)
      ) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          fieldName
            ? `The ${fieldName} is required!`
            : 'This field is required!',
        ),
      );
    },
  }),
  email: () => ({
    type: 'email',
    message: 'Incorrect Email Address!',
  }),
  onlyEnglishLetters: () => ({
    pattern: regexPatterns.onlyEnglishLetters,
    message: 'Only english letters are allowed',
  }),
  phoneNumber: () => ({
    pattern: regexPatterns.phoneNumber,
    message: 'Invalid phone number format',
  }),
  url: () => ({
    pattern: regexPatterns.url,
    message: 'Invalid url format',
  }),
  fax: () => ({
    pattern: regexPatterns.fax,
    message: 'Invalid fax number format',
  }),
  password: [
    {
      validator(_: RuleObject, value) {
        if (passwordValidator(value, 1)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(''));
      },
    },
  ],
  acceptTerms: [
    {
      validator(_: RuleObject, value) {
        if (value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Please accept Terms and Conditions!'));
      },
    },
  ],
  passwordConfirm: [
    ({ getFieldValue }) => ({
      validator(_: RuleObject, value) {
        if (getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The passwords do not match!'));
      },
    }),
  ],
  withoutSpace: fieldName => ({
    validator(_: RuleObject, value) {
      if (!regexPatterns.startEndWhiteSpace.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          fieldName
            ? `${fieldName} can't start or end with white space!`
            : "This field can't start or end with white space!",
        ),
      );
    },
  }),
  startTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('startTime') ||
          !getFieldValue('endTime') ||
          dayjs(getFieldValue('endTime').startOf('day')) >
            dayjs(value).startOf('day')
        ) {
          setFields([
            {
              name: 'endTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start time must be earlier than end'),
        );
      },
    }),
  ],
  endTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('startTime') ||
          !getFieldValue('endTime') ||
            dayjs(getFieldValue('startTime').startOf('day')) <
            dayjs(value).startOf('day')
        ) {
          setFields([
            {
              name: 'startTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end time must be later than start'),
        );
      },
    }),
  ],
  startDateTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('startDateTime') ||
          !getFieldValue('endDateTime') ||
            dayjs(getFieldValue('endDateTime'))
                .millisecond(0)
            .isAfter(dayjs(value).millisecond(0))
        ) {
          setFields([
            {
              name: 'endDateTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The start date must be earlier than end'),
        );
      },
    }),
  ],
  endDateTime: [
    ({ getFieldValue, setFields }) => ({
      validator(_: RuleObject, value: string) {
        if (
          !getFieldValue('startDateTime') ||
          !getFieldValue('endDateTime') ||
            dayjs(value)
            .millisecond(0)
            .isAfter(dayjs(getFieldValue('startDateTime')).millisecond(0))
        ) {
          setFields([
            {
              name: 'startDateTime',
              errors: [],
            },
          ]);
          return Promise.resolve();
        }
        return Promise.reject(
          new Error('The end date must be later than start'),
        );
      },
    }),
  ],
  integerOptional: () => ({
    validator(_: RuleObject, value: string) {
      if (!value.match(/[^\d]/g)) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The value should be positive number'));
    },
  }),
  verificationCode: () => ({
    validator: (_: RuleObject, value: string | string[]) =>
      value?.length === 6
        ? Promise.resolve()
        : Promise.reject(),
    message: 'This field is required',
  }),
  maxChars: (count: number, fieldName: string) => ({
    validator: (_: RuleObject, value: string) =>
      value?.length > count ? Promise.reject() : Promise.resolve(),
    message: `${
      fieldName || 'This field'
    } can't be longer than ${count} characters`,
  }),
  minChars: (count: number, fieldName: string) => ({
    validator: (_: RuleObject, value: string) =>
      value?.length < count ? Promise.reject() : Promise.resolve(),
    message: `${
      fieldName || 'This field'
    } must be at least ${count} characters`,
  }),
};
