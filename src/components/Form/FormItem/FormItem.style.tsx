import styled from 'styled-components';
import Form from 'antd/es/form';
import { TFormItemProps } from './types';

const { Item } = Form;
const SFormItem = styled(Item)`
    // margin-bottom: ${(props: TFormItemProps) => props.marginBottom || 24}px;
    
`;

export default SFormItem;
