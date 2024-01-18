import PageWrapper from "../../components/PageWrapper";
import {Button, Col, Form, Input, Row, Select} from "antd";
import PhotoUpload from "../../components/PhotoUpload";
import {FormItem} from "../../components/Form/FormItem";

export const usTimeZoneOptions = [
    {
        label: 'US/Alaska',
        value: 'US/Alaska',
    },
    {
        label: 'US/Aleutian',
        value: 'US/Aleutian',
    },
    {
        label: 'US/Arizona',
        value: 'US/Arizona',
    },
    {
        label: 'US/Central',
        value: 'US/Central',
    },
    {
        label: 'US/East-Indiana',
        value: 'US/East-Indiana',
    },
    {
        label: 'US/Eastern',
        value: 'US/Eastern',
    },
    {
        label: 'US/Hawaii',
        value: 'US/Hawaii',
    },
    {
        label: 'US/Indiana-Starke',
        value: 'US/Indiana-Starke',
    },
    {
        label: 'US/Michigan',
        value: 'US/Michigan',
    },
    {
        label: 'US/Mountain',
        value: 'US/Mountain',
    },
    {
        label: 'US/Pacific',
        value: 'US/Pacific',
    },
    {
        label: 'US/Samoa',
        value: 'US/Samoa',
    },
];

const Practice = () => {
    return (
        <PageWrapper title='Practices' subtitle='Complete your practice details' >
            <Row justify='center'>
                <Col >
                    <Row>
                        <Form style={{width:'100%'}}>
                            <Form.Item style={{width:'100%'}}>
                                <PhotoUpload />
                            </Form.Item>
                            <FormItem label='Practice Name' name='name'>
                                <Input placeholder='Practice name' />
                            </FormItem>
                            <Row gutter={[8,0]}>
                                <Col md={12} xs={24}>
                                    <FormItem label='Street' name='street'>
                                        <Input placeholder='Enter Street'/>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row gutter={[8,0]}>
                                <Col md={12} xs={24}>
                                    <FormItem label='City' name='city'>
                                        <Input placeholder='Enter City' />
                                    </FormItem>
                                </Col>
                                <Col md={6} xs={12}>
                                    <FormItem label='State' name='state'>
                                        <Input placeholder='Enter State' />
                                    </FormItem>
                                </Col>
                                <Col md={6} xs={12}>
                                    <FormItem label='Zip Code' name='zipCode' >
                                        <Input placeholder='Enter Zip' />
                                    </FormItem>
                                </Col>
                            </Row>
                            <FormItem label='Doctors' name='doctors'>
                                <Select placeholder='Select doctors' options={[{label:'Doctor1',value:'doctor1Id'},{label:'Doctor2',value:'doctor2Id'}]} allowClear mode='multiple' />
                            </FormItem>
                            <FormItem label='TimeZone' name='timeZone'>
                                <Select options={usTimeZoneOptions} placeholder='Select timezone'/>
                            </FormItem>
                            <FormItem>
                                <Button type='primary' htmlType='submit'>
                                Submit
                            </Button></FormItem>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </PageWrapper>
    );
};

export default Practice;