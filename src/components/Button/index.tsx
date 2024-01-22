import  {ButtonProps} from 'antd/es/button';
import {Icon} from "../Icon";
import {EIconNames} from "../Icon/Icon.type.ts";
import {Col, Row} from "antd";
import SButton from "./Button.styles.ts";

const Button = (buttonProps: ButtonProps & {
    icon?:EIconNames
}) => {
    const {icon,...props} = buttonProps
    return (
        <SButton {...props} >
            {
                icon ? (
                    <Row align='middle' gutter={[8,0]}>
                        <Col><Icon icon={icon} size={18}  /></Col>
                        <Col>{props.children}</Col>
                    </Row>)
                    :
                    props.children
            }
        </SButton>

    );
};

export default Button;