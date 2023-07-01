import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Sider } = Layout;



const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const SiderApp = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
                
                <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                
        </div>
    );
};

export default SiderApp;