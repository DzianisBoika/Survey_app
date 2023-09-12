import React from 'react';
import stylesheet from '../Assets/Styles/Header.module.scss';
import { Layout } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Logo from '../Assets/img/logo.svg';
const { Header } = Layout;




const HeaderApp: React.FC = () => {
    return (
        <Header className={stylesheet.Header}>
            <div className={stylesheet.container}>
                <img src={Logo} alt="Logo"  height={40} />
            </div>
            <LogoutOutlined style={{ fontSize: '30px', color: 'white' }} />
        </Header>
    );
};

export default HeaderApp;