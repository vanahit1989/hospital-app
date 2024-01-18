import { Rule } from 'antd/es/form';



export type TValidationRules = {
  required: (fieldName?: string) => Rule;

};
