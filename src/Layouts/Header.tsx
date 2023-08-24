import React from 'react';
import stylesheet from '../Assets/Styles/Header.module.scss';
import { Layout, Menu } from 'antd';
import { AntDesignOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const { Header } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const HeaderApp: React.FC = () => {
    return (
    <Header className={stylesheet.Header}>
        <div className={stylesheet.container}>
        <Avatar
            size={60}
          icon={<AntDesignOutlined />} // лого
        />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </div>

        <Avatar
        size={60}
        icon={<LogoutOutlined />} // кнопка выхода
        />
    </Header>
    );
};

export default HeaderApp;