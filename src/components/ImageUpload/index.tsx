import {ChangeEvent, FC, useEffect, useState} from "react";
import {Icon} from "../Icon";
import {Colors} from "../../core/CssVariables.ts";
import {EIconNames} from "../Icon/Icon.type.ts";
import ImageUploadWrapper from "./ImageUpload.style.ts";
import {Paragraph} from "../Typography";
import {message} from "antd";

type TImageUploadProps = {
    initialUrl?:string;
    onChange?:(logoUrl:string)=>void;
}
const ImageUpload:FC<TImageUploadProps> = ({initialUrl,onChange}) => {
    const [imageFile,setImageFile] = useState<null | File>(null)
    const [imageUrl, setImageUrl] = useState<string>( initialUrl || '');

    useEffect(() => {
        if (onChange && imageFile){
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onload = function (){
                onChange(reader.result as string )
            }
        }
    }, [imageFile]);
    const handleImageChange =  (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0 ) {
            if (files[0].size < 1048000){
                setImageUrl(URL.createObjectURL(files[0]));
                setImageFile(files[0])
            }
            else message.error('Please upload images up to 1MB')
        }
    };
    return (
        <ImageUploadWrapper>
            <div className="upload-wrapper">
                <label htmlFor="image" className="upload-btn pointer">
                <input
                    type="file"
                    accept=".jpeg, .jpg, .png, .svg"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                    draggable={"true"}
                />
                {!imageUrl && (
                    <div className='upload-logo'>
                        <Icon
                        icon={EIconNames.IMAGE_UPLOAD}
                        color={Colors.LightGrey}
                        data-testid="upload-icon"
                        />
                        <Paragraph className='upload-text' >
                                Upload logo
                        </Paragraph>
                    </div>
                )}
                <img
                    className="upload-image"
                    src={imageUrl}
                />
            </label>
            </div>
        </ImageUploadWrapper>
    )
}

export default ImageUpload;