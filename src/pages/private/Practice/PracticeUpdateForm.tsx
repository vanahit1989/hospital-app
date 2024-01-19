import {Button, Col, Form, Input, message, Row} from "antd";
import ImageUpload from "../../../components/ImageUpload";
import {FormItem} from "../../../components/Form/FormItem";
import {validationRules} from "../../../components/Form/validationRules.ts";
import useForm from "../../../hooks/useForm.tsx";
import {TPractice} from "../../../firebase/useGetPractice.tsx";
import {FC} from "react";
import useUpdatePractice from "../../../firebase/useUpdatePractice.tsx";

type TPracticeUpdateFormProps = {
    data:TPractice;
    id:string
}
const PracticeUpdateForm:FC<TPracticeUpdateFormProps> = ({data,id})=>{
    const {form} = useForm()
    const {mutate,isLoading} = useUpdatePractice(id)
    const onSubmit = async () => {
        try {
            const formValues =  await form.validateFields()
            const updatedData:TPractice = {
                ...data,
                name:formValues.name,
                timeZone:formValues.timeZone,
                address:{
                    city:formValues.city,
                    street:formValues.street,
                    state:formValues.state,
                    country:formValues.country,
                    zipCode:formValues.zipCode
                },
                logoUrl:formValues.logoUrl,
            }
            console.log(updatedData)
              mutate(updatedData,{
                  onSuccess:()=>{
                      message.success('Data updated successfully!')
                  },
                  onError:()=>{
                      message.error('Failed')
                  }
              })
        }
        catch (err){
            console.log(err || 'error11111')
        }
    }

    return (
        <Form style={{width: '100%'}} form={form} onSubmitCapture={onSubmit}>
            <Form.Item
                style={{width: '100%'}}
                name='logoUrl'
                initialValue={data.logoUrl}
                rules={[validationRules.required()]}
            >
                <ImageUpload initialUrl={data.logoUrl}/>
            </Form.Item>
            <FormItem
                label='Practice Name'
                name='name'
                rules={[validationRules.required()]}
                initialValue={data.name}
            >
                <Input placeholder='Practice name'/>
            </FormItem>
            <Row gutter={[8, 0]}>
                <Col md={12} xs={24}>
                    <FormItem
                        label='Country'
                        name='country'
                        rules={[validationRules.required()]}
                        initialValue={data.address?.country}
                    >
                        <Input placeholder='Enter Country'/>
                    </FormItem>
                </Col>
                <Col md={6} xs={12}>
                    <FormItem
                        label='State'
                        name='state'
                        rules={[validationRules.required()]}
                        initialValue={data.address?.state}
                    >
                        <Input placeholder='Enter State'/>
                    </FormItem>
                </Col>
                <Col md={6} xs={12}>
                    <FormItem
                        label='City'
                        name='city'
                        rules={[validationRules.required()]}
                        initialValue={data.address?.city}
                    >
                        <Input placeholder='Enter City'/>
                    </FormItem>
                </Col>
            </Row>
            <Row gutter={[8, 0]}>
                <Col md={12} xs={24}>
                    <FormItem
                        label='Street'
                        name='street'
                        rules={[validationRules.required()]}
                        initialValue={data.address?.street}
                    >
                        <Input placeholder='Enter Street'/>
                    </FormItem>
                </Col>
                <Col md={6} xs={12}>
                    <FormItem
                        label='Zip Code'
                        name='zipCode'
                        rules={[validationRules.required()]}
                        initialValue={data.address?.zipCode}
                    >
                        <Input placeholder='Enter Zip'/>
                    </FormItem>
                </Col>
                <Col md={6} xs={12}>
                    <FormItem
                        label='TimeZone'
                        name='timeZone'
                        rules={[validationRules.required()]}
                        initialValue={data.timeZone}
                    >
                        <Input placeholder='Enter TimeZone'/>
                    </FormItem>
                </Col>
            </Row>
            <FormItem>
                <Button type='primary' htmlType='submit' loading={isLoading}>
                    Save
                </Button>
            </FormItem>
        </Form>

    )
}

export default PracticeUpdateForm;