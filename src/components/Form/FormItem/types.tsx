import type {FormItemProps} from 'antd/es/form';

type TFormItemMargin = {
  marginBottom?: number | string;
};
export type TFormItemProps = FormItemProps & TFormItemMargin;

// export type TFromFieldInputProps = TInputProps | TPasswordProps | TTextAreaProps | TSearchProps | TGroupProps;
