import {SUpload} from "./PhotoUpload.style.tsx";
import {FC, useState} from "react";
import type { UploadProps } from "antd/es/upload";
import {GetProp, message} from "antd";
import {Icon} from "../Icon";
import {EIconNames} from "../Icon/Icon.type.ts";
import {Paragraph} from "../Typography";
import {Colors} from "../../core/CssVariables.ts";



type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpg' || file.type === 'image/png'|| file.type === 'image/svg'|| file.type === 'image/png' || file.type === 'image/jpeg';
    if (!isJpgOrPng) {
         message.error('You can only upload JPG/JPEG/PNG/SVG file!');
    }
    return isJpgOrPng;
};

const PhotoUpload:FC = ()=>{
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>('');
    const handleChange: UploadProps['onChange'] = (info) => {
        console.log(info)
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            console.log(info)
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <span>loading</span> : <Icon icon={EIconNames.USER} />}
            <div style={{ marginTop: 8 }}>
                <Paragraph color={Colors.InfoColor}>Click to upload</Paragraph>
                <Paragraph color={Colors.GreyOpacity}> or drag and drop</Paragraph>
            </div>
        </button>
    );

    return (
        <>
        <SUpload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </SUpload>
        </>
    )
}

export default  PhotoUpload;