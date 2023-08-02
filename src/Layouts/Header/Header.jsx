import React from 'react';
import stylesheet from '../../Assets/Styles/Header.module.scss';
import { Layout, Menu } from 'antd';
import { AntDesignOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const { Header } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const HeaderApp = () => {
    return (
        <Header className={stylesheet.Header}>
            <div className={stylesheet.container}>
                <Avatar
                    size={{ xl: 60 }}
                    icon={<AntDesignOutlined />}
                />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </div>
            
            <Avatar 
                size={{ xl: 60 }}
                icon={<LogoutOutlined />}
                />
        </Header>
    );
};

export default HeaderApp;