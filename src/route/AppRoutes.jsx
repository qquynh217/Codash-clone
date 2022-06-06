import React from 'react';
import { Layout, Menu } from 'antd';
import { MenuAdmin } from './components/MenuAdmin';
import { NavBar } from './components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { CryptoCurrency } from '../pages/crypto-currency/Crypto';
const { Header, Content, Footer, Sider } = Layout;
// const items = [
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     AppstoreOutlined,
//     TeamOutlined,
//     ShopOutlined,
// ].map((icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
// }));

export const AppRoutes = () => (
    <Layout hasSider>
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                minWidth: 280,
                zIndex: 10,
            }}
        >
            <div className="logo">
                <div className='logo-type'>
                    <span className="logo-white">c</span>
                    <span className="logo-red">o</span>
                    <span className="logo-white">dash</span>
                </div>
            </div>
            <MenuAdmin />
        </Sider>
        <Layout
            className="site-layout"
            style={{
                marginLeft: 200,
            }}
        >
            <Header
                className="site-layout-background"
                style={{
                    padding: '10px 40px',
                    height: '70px',
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: `${window.innerWidth - 260}px`,
                    zIndex: '10'
                }}
            >
                <NavBar />
            </Header>
            <Content
                style={{
                    marginTop: '64px',
                    padding: '50px 30px 0',
                    overflow: 'initial',
                    height: 'auto',
                    backgroundColor: '#f7f7f7'
                }}
            >
                <Routes>
                    <Route //localhost:3000/
                        path="/*"
                        element={<Navigate replace to="/dashboard" />}
                    />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/crypto-currency' element={<CryptoCurrency />} />
                </Routes>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    </Layout>
);