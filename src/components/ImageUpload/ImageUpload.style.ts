import styled from "styled-components";
import {Colors} from "../../core/CssVariables.ts";

const ImageUploadWrapper = styled.div<{
    width?: number;
    height?: number;
    error?: boolean;
}>`
    .upload-wrapper {
        border: 1px solid ${Colors.LightGrey};
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        background-color: ${Colors.LightBackground};
    }
    .upload-btn {
        height: ${props => props.width || 200}px;
        width: ${props => props.height || 200}px;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }
    && input {
        display: none;
    }
    .upload-logo {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        
    }
    .upload-image {
        border-radius: 50%;
        height: ${props => props.width || 200}px;
        width: ${props => props.height || 200}px;
        position: absolute;
        inset: 0 0 0 0;
        object-fit: cover;
        pointer-events: none;
        &:not([src]) {
            display: none;
        }
    }
    .upload-text {
        text-align: center;
        color: ${Colors.Grey};
    }
`;
export default ImageUploadWrapper;