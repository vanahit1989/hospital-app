import {Content} from "antd/es/layout/layout";
import Menu from "antd/es/menu";
import Sider from "antd/es/layout/Sider";
import Layout from "antd/es/layout";
import {useMemo} from "react";
import {privateRoutes} from "../../routes/RoutesData.tsx";
import {Icon} from "../Icon";
import {Outlet, useNavigate} from "react-router-dom";
import {Avatar, Col, Row} from "antd";
import {Paragraph} from "../Typography";
import useGetPractice from "../../firebase/useGetPractice.tsx";

const LayoutWrapper = () => {
    const navigate = useNavigate();
    const {data:practiceData} = useGetPractice()

    const menuItems = useMemo(() => privateRoutes.filter(item => !item.hideFromSideBar).map(item => {
        return {
            key: item.path,
            icon: item.icon ? <Icon size={20} icon={item.icon} /> : undefined,
            label: item.title,
        }
    }), [])
    return (
            <Layout >
                <Sider width={200} style={{ background: 'white' }}>
                    {practiceData && (<Row align='middle' gutter={[8, 0]} style={{padding: 8}}>
                        <Col>
                            <Avatar src={practiceData?.logoUrl}>
                                {!practiceData?.logoUrl && <span style={{color: 'black'}}>H</span>}
                            </Avatar>
                        </Col>
                        <Col>
                            <Paragraph>{practiceData?.name}</Paragraph>
                        </Col>
                    </Row>)}
                    <Menu
                        onClick={(item) => navigate(item.key)}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: 'auto', borderRight: 0}}
                        items={menuItems}
                    />
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: 'white',
                            borderRadius: 'grey',
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
    )
};

export default LayoutWrapper;