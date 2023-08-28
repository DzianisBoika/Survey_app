import React from 'react';
import stylesheet from '../Assets/Styles/Header.module.scss';
import { Layout } from 'antd';
import { AntDesignOutlined, LogoutOutlined } from '@ant-design/icons';
import Logo from '../Assets/img/logo.svg';
import { Avatar } from 'antd';
const { Header } = Layout;



const HeaderApp: React.FC = () => {
    return (
        <Header className={stylesheet.Header}>
            <div className={stylesheet.container}>
                
            <img src={Logo} alt="Logo"  height={40} />
        </div>

        <Avatar
            size={60}
            icon={<LogoutOutlined />} // кнопка выхода
        />
    </Header>
    );
};

export default HeaderApp;