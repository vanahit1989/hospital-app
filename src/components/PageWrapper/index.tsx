import {FC, ReactElement} from "react";
import {SPageContent, SPageHeader, SPageWrapper} from "./PageWrapper.style.ts";
import {Paragraph, Title} from "../Typography";
import {Colors} from "../../core/CssVariables.ts";

type TPageWrapperProps = {
    title:string;
    subtitle?:string;
    children:ReactElement
}
const PageWrapper:FC<TPageWrapperProps> = ({title,subtitle,children})=>{

    return(
        <SPageWrapper>
            <SPageHeader>
                <Title>{title}</Title>
                {subtitle && <Paragraph color={Colors.Grey}>{subtitle}</Paragraph>}
            </SPageHeader>
            <SPageContent>
                {children}
            </SPageContent>
        </SPageWrapper>
    )
}

export default PageWrapper;