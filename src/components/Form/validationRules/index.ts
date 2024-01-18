import { RuleObject } from 'antd/lib/form';
import {  TValidationRules } from './validationRules.type';


export const validationRules: TValidationRules = {
  required: fieldName => ({
    validator(_: RuleObject, value: any) {
      if (
        (typeof value === 'string' && value.trim()) ||
        (typeof value !== 'string' && value?.length)
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
};
