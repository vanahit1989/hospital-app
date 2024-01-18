import PageWrapper from "../../components/PageWrapper";
import {Button, Col, Form, Input, Row} from "antd";
import PhotoUpload from "../../components/PhotoUpload";
import Line from "../../components/Line";
import {FormItem} from "../../components/Form/FormItem";

const Practice = () => {
    return (
        <PageWrapper title='Practices' subtitle='Complete your practice details' >
            <Row justify='space-between'>
                <Col span={11}>
                    <Row>
                        <Form style={{width:'100%'}}>
                            <Form.Item style={{width:'100%'}}>
                                <PhotoUpload />
                            </Form.Item>
                            <FormItem label='Practice Name' name='name'>
                                <Input />
                            </FormItem>
                            <Row justify='space-between'>
                                <Col>
                                    <FormItem label='Clearinghouse' name=''>
                                        <Input />
                                    </FormItem>
                                </Col>
                                <Col>
                                    <FormItem label='Tax ID' name=''>
                                        <Input />
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormItem label='Phone' name='phone'>
                                        <Input />
                                    </FormItem>
                                </Col>
                                <Col>
                                    <FormItem label='Email' name='email'>
                                        <Input />
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormItem label='Address Line 1' name='addressLine1'>
                                        <Input />
                                    </FormItem>
                                </Col>
                                <Col>
                                    <FormItem label='Address Line 2' name='addressLine2'>
                                        <Input />
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormItem label='City' name='city'>
                                        <Input />
                                    </FormItem>
                                </Col>
                                <Col>
                                    <FormItem label='State' name='state'>
                                        <Input />
                                    </FormItem>
                                </Col>
                                <Col>
                                    <FormItem label='Zip Code' name='zipCode'>
                                        <Input />
                                    </FormItem>
                                </Col>
                            </Row>
                            <Button type='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Row>
                </Col>
                <Line/>
                <Col span={11}>

                </Col>
            </Row>
        </PageWrapper>
    );
};

export default Practice;