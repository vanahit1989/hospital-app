import styled from "styled-components";
import Sider from "antd/es/layout/Sider";

const SSider = styled(Sider)`
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

export default SSider;

