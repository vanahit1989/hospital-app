import styled from 'styled-components';
import Form from 'antd/es/form';
import { TFormItemProps } from './types';
import {Colors, FontSizes, FontWeights} from "../../../core/CssVariables.ts";

const { Item } = Form;
const SFormItem = styled(Item)`
     margin-bottom: ${(props: TFormItemProps) => props.marginBottom || 40}px;
        .ant-form-item-row{
            display: flex;
            flex-direction: column;
            .ant-form-item-label{
                text-align: left;
                label {
                    font-size: ${FontSizes.FontSM}px;
                    font-weight: ${FontWeights.SemiBold};
                    color: ${Colors.Grey};
                    height: auto;
                    &::after {
                        content: '';
                    }
            }
        }
`;

export default SFormItem;
