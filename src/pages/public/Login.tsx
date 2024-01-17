
import {Form, Input, Button, message, Row, Col} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useState} from "react";
import { auth } from "../../firebase.ts";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: any) => {
        try {
            setLoading(true);

            const { username, password } = values;
            const response = await signInWithEmailAndPassword(auth, username, password);
            console.log('Login successful', response);

            // You can add your own logic here, such as redirecting to another page.

            message.success('Login successful');
        } catch (error: any) {
            console.error('Login failed', error);
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const validatePassword = (_, value: any) => {
        if (value && value.length < 8) {
            return Promise.reject('Password must be at least 8 characters long');
        }
        return Promise.resolve();
    };

    return (
        <Row justify='center' align='middle'>
            <Col>
        <Form
            name="loginForm"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                    { validator: validatePassword },
                ]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={loading}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
            </Col>
        </Row>
    );
};

export default LoginForm;