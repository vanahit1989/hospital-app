import {Content} from "antd/es/layout/layout";
import Menu from "antd/es/menu";
import Sider from "antd/es/layout/Sider";
import  Layout from "antd/es/layout";
import {useMemo} from "react";
import {privateRoutes} from "../../routes/RoutesData.tsx";
import {Icon} from "../Icon";
import {Outlet, useNavigate} from "react-router-dom";

const LayoutWrapper = () => {
    const navigate = useNavigate();
    const menuItems = useMemo(() => privateRoutes.filter(item => !item.hideFromSideBar).map(item => {
        return {
            key: item.path,
            icon: item.icon ? <Icon size={20} icon={item.icon} /> : undefined,
            label: item.title,
        }
    }), [])
    return (
        <Layout>
            <Layout>
                <Sider width={200} style={{ background: 'white' }}>
                    <Menu
                        onClick={(item) => navigate(item.key)}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={menuItems}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
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
        </Layout>
    )
};

export default LayoutWrapper;