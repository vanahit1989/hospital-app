import { FormInstance, useForm as AntdForm } from 'antd/es/form/Form';

export type TFromReturnType = {
  setCustomFieldValue: (fieldName: string, customValue?: any) => void;
  form: FormInstance<any>;
};
const useForm = (initialValues?: FormInstance<any>): TFromReturnType => {
  const [form] = AntdForm<any>(initialValues);
  const { setFieldsValue } = form;

  const setCustomFieldValue = (fieldName: string, customValue?: any): void => {
    setFieldsValue({ [fieldName]: customValue });
  };
  return { setCustomFieldValue, form };
};

export default useForm;
