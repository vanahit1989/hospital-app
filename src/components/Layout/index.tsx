import {Content} from "antd/es/layout/layout";
import Menu from "antd/es/menu";
import Layout from "antd/es/layout";
import {useMemo} from "react";
import {privateRoutes} from "../../routes/RoutesData.tsx";
import {Icon} from "../Icon";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Avatar, Col} from "antd";
import {Paragraph} from "../Typography";
import useGetPractice from "../../firebase/useGetPractice.tsx";
import {EIconNames} from "../Icon/Icon.type.ts";
import Button from "../Button";
import {PracticeInfoWrapper,SSider} from "./SiderBar.style.ts";
import {signOut} from 'firebase/auth';
import {auth} from "../../firebase.ts";
import {FontSizes, FontWeights} from "../../core/CssVariables.ts";


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
    const onSignOut =async ()=>{
        await signOut(auth);
    }
    const {pathname} = useLocation();
    const selectedKey = pathname.split('/').pop();
    return (
            <Layout >
                <SSider >
                        <div>
                            <PracticeInfoWrapper align='middle' gutter={[8, 0]} wrap={false}>
                                {practiceData && <>
                                    <Col >
                                        <Avatar src={practiceData?.logoUrl} size="large">
                                            {!practiceData?.logoUrl && <span style={{color: 'black'}}>H</span>}
                                        </Avatar>
                                    </Col>
                                    <Col>
                                        <Paragraph fontSize={FontSizes.FontMD} fontWeight={FontWeights.SemiBold} ellipsis={{rows:2,tooltip:practiceData?.name}} >{practiceData?.name}</Paragraph>
                                    </Col>
                                </>
                                }
                            </PracticeInfoWrapper>
                            <Menu
                                onClick={(item) => navigate(item.key)}
                                mode="inline"
                                defaultSelectedKeys={selectedKey ? [selectedKey]:[]}
                                defaultOpenKeys={selectedKey ? [selectedKey]:[]}
                                style={{height: 'auto', borderRight: 0}}
                                items={menuItems}
                            />
                        </div>
                        <div>
                            <Button icon={EIconNames.LOGOUT} style={{width:'100%'}} onClick={onSignOut} >
                                Logout
                            </Button>
                        </div>
                </SSider>
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