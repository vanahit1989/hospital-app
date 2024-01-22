import {FC, ReactElement} from "react";
import {SPageContent, SPageHeader, SPageWrapper} from "./PageWrapper.style.ts";
import {Paragraph, Title} from "../Typography";
import {Colors} from "../../core/CssVariables.ts";
import {Col, Row} from "antd";

type TPageWrapperProps = {
    title: string; subtitle?: string; children: ReactElement
    actions?: ReactElement
}
const PageWrapper: FC<TPageWrapperProps> = ({title, actions, subtitle, children}) => {

    return (<SPageWrapper>
        <SPageHeader>
            <Row gutter={[12, 12]} justify='space-between'>
                <Col>
                    <Title>{title}</Title>
                    {subtitle && <Paragraph color={Colors.Grey}>{subtitle}</Paragraph>}
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