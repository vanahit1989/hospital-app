import PageWrapper from "../../components/PageWrapper";
import {Button, Col, Form, Input, Row} from "antd";
import PhotoUpload from "../../components/PhotoUpload";
import {FormItem} from "../../components/Form/FormItem";
import useForm from "../../hooks/useForm.tsx";
import {validationRules} from "../../components/Form/validationRules";
import useGetUserData from "../../hooks/useGetUserData.tsx";
import useGetPractice from "../../hooks/useGetPractice.tsx";

const Practice = () => {
    const {isError: getUserDataError, userData, isLoading: userDataLoading} = useGetUserData()
    const {data, isLoading: practiceLoading, isError: practiceError} = useGetPractice(userData?.practiceId)

    const {form} = useForm()
    const onSubmit = async () => {
        await form.validateFields()
    }
    return (
        <PageWrapper title='Practices' subtitle='Complete your practice details'>
            {
                data ?
                    (<Row justify='center'>
                        <Col>
                            <Row>
                                <Form style={{width: '100%'}} form={form} onSubmitCapture={onSubmit}>
                                    <Form.Item style={{width: '100%'}} name='logoUrl'>
                                        <PhotoUpload/>
                                    </Form.Item>
                                    <FormItem
                                        label='Practice Name'
                                        name='name'
                                        rules={[validationRules.required()]}
                                    >
                                        <Input placeholder='Practice name'/>
                                    </FormItem>
                                    <Row gutter={[8, 0]}>
                                        <Col md={12} xs={24}>
                                            <FormItem
                                                label='Country'
                                                name='country'
                                                rules={[validationRules.required()]}
                                            >
                                                <Input placeholder='Enter Country'/>
                                            </FormItem>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <FormItem
                                                label='State'
                                                name='state'
                                                rules={[validationRules.required()]}
                                            >
                                                <Input placeholder='Enter State'/>
                                            </FormItem>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <FormItem
                                                label='City'
                                                name='city'
                                                rules={[validationRules.required()]}
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
                                            >
                                                <Input placeholder='Enter Street'/>
                                            </FormItem>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <FormItem
                                                label='Zip Code'
                                                name='zipCode'
                                                rules={[validationRules.required()]}
                                            >
                                                <Input placeholder='Enter Zip'/>
                                            </FormItem>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <FormItem
                                                label='TimeZone'
                                                name='timeZone'
                                                rules={[validationRules.required()]}
                                            >
                                                <Input placeholder='Enter TimeZone'/>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                    <FormItem>
                                        <Button type='primary' htmlType='submit'>
                                            Save
                                        </Button>
                                    </FormItem>
                                </Form>
                            </Row>
                        </Col>
                    </Row>)
                    :
                    <></>
            }
        </PageWrapper>
    );
};

export default Practice;