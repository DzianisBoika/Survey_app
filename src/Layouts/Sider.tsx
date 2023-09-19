import React from 'react';
import stylesheet from '../Assets/Styles/Sider.module.scss'
import { LaptopOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
const { Sider } = Layout;


const items2 = [LaptopOutlined].map(
    (icon, index) => {
    const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `Ваши опросы`,

        children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `Таблица опроса ${subKey}`,
        };
        }),
    };
    }, 
    
);

const SiderApp: React.FC = () => {
    return (
        
            <div className={stylesheet.container}>
                <Sider >
                    <Menu className={stylesheet.menu}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        
                        items={items2}                    
                    />
                </Sider>
            </div>
        
    );
};

export default SiderApp;