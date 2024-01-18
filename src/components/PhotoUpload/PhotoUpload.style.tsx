import styled from "styled-components";
import {Upload} from "antd";


export const SUpload = styled(Upload)`
    &.ant-upload-wrapper{
        && .ant-upload{
            min-width: 100%;
            height: 200px;
            img {
                height: 100%;
                width: auto;
                
            }
        }
    }
`