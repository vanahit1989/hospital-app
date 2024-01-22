import styled from "styled-components";
import Sider from "antd/es/layout/Sider";
import {Row} from "antd";
import {Colors} from "../../core/CssVariables.ts";

export const SSider = styled(Sider)`
    &.ant-layout-sider {
        width:200px;
        background-color: white;
        .ant-layout-sider-children{
            padding: 8px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
`
export const PracticeInfoWrapper = styled(Row)`
    min-height:50px;
    background-color: ${Colors.LightBackground};
    margin-bottom: 16px;
`


