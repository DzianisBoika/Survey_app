import React from 'react';
import stylesheet from '../Assets/Styles/Header.module.scss';
import { Layout } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Logo from '../logo.svg';
const { Header } = Layout;




const HeaderApp: React.FC = () => {
    return (
        <Header className={stylesheet.header}>
            <div className={stylesheet.container}>
                <a href='/'><img src={Logo} alt="Logo"  height={40} /></a>
            </div>
            <LogoutOutlined style={{ fontSize: '30px', color: 'white' }} />
        </Header>
    );
};

export default HeaderApp;