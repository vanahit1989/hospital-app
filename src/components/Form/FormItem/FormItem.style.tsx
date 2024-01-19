import styled from 'styled-components';
import Form from 'antd/es/form';
import { TFormItemProps } from './types';
import {Colors, FontSizes, FontWeights, Screens} from '../../../core/CssVariables';

const { Item } = Form;
const SFormItem = styled(Item)`
     margin-bottom: ${(props: TFormItemProps) => props.marginBottom || 40}px;
    min-height: 30px;

    .ant-form-item-row{
            display: flex;
            flex-direction: column;
            .ant-form-item-label {
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
                .ant-form-item-required:not(.ant-form-item-required-mark-optional) {
                    &:before {
                        display: none;
                    }
                }
            }
            .ant-form-item-explain-error {
                font-size: ${FontSizes.FontXS}px;
                color: ${Colors.ErrorColor};
                height: 40px;
                @media (max-width: ${Screens.ScreensSM}) {
                    display: flex;
                }
            }
`;

export default SFormItem;
