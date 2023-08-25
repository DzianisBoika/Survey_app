import React from 'react';
import stylesheet from '../Assets/Styles/Header.module.scss';
import { Layout } from 'antd';
import { AntDesignOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const { Header } = Layout;



const HeaderApp: React.FC = () => {
    return (
    <Header className={stylesheet.Header}>
        <div className={stylesheet.container}>
        <Avatar
            size={60}
          icon={<AntDesignOutlined />} // лого
        />
        
        </div>

        <Avatar
        size={60}
        icon={<LogoutOutlined />} // кнопка выхода
        />
    </Header>
    );
};

export default HeaderApp;