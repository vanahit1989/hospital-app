import {FC, ReactElement} from "react";
import {SPageContent, SPageHeader, SPageWrapper} from "./PageWrapper.style.ts";
import {LinkText, Paragraph, Title} from "../Typography";
import {Colors} from "../../core/CssVariables.ts";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import {Icon} from "../Icon";
import {EIconNames} from "../Icon/Icon.type.ts";

type TPageWrapperProps = {
    title: string; subtitle?: string; children: ReactElement
    actions?: ReactElement;
    backPath?: string;
}
const PageWrapper: FC<TPageWrapperProps> = ({title, backPath,  actions, subtitle, children}) => {

    return (<SPageWrapper>
        <SPageHeader>
            <Row gutter={[8, 8]} justify='space-between'>
                <Col>
                    <Row gutter={[8, 8]} >
                {backPath &&
                    <Col span={24}>
                        <Link  to={backPath} > <LinkText fontSize={14} color={Colors.Grey}> <Icon  icon={EIconNames.ARROW_LEFT} color={Colors.Grey} size={16} className='mr-2'/> Go to back</LinkText></Link>
                </Col>}
                <Col>
                    <Title level={2}>{title}</Title>
                </Col>
                {subtitle && <Col span={24}><Paragraph color={Colors.Grey}>{subtitle}</Paragraph></Col>}
                    </Row>
                </Col>
                {actions && <Col>{actions}</Col>}
            </Row>
        </SPageHeader>
            <SPageContent>
                {children}
            </SPageContent>
        </SPageWrapper>)
}

export default PageWrapper;