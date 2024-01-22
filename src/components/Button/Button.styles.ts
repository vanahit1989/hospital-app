import styled, {css} from "styled-components";
import AntdButton, {ButtonProps} from "antd/es/button";

const SButton = styled<typeof AntdButton>(AntdButton)`
    &.ant-btn{
        ${(props: ButtonProps) => {
            switch (props.type) {
                case 'default':
                    return ''
                case 'primary':
                    return css`
                        fill: white;    
                    `;
                case 'link':
                    return ''
                default:
                    return ''
            }
        }}
    }
    &.ant-btn:hover{
        && .icon{
            ${(props: ButtonProps) => {
                switch (props.type) {
                    case 'default':
                        return css`
                            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
                            fill: #4096ff;
                            `
                    case 'primary':
                          return '';
                    case 'link':
                          return ''
                    default:
                         return css`
                            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
                            fill: #4096ff;
                            `
                }
            }}           
        }   
    }
`
export default SButton;