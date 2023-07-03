import React from 'react';
import stylesheet from '../../Assets/Styles/Content.module.scss';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { MenuProps } from 'antd';
import TableApp from '../Table/Table';

const { Content, Footer, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `Сайдер ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `Опция ${subKey}`,
                };
            }),
        };
    },
);

const ContentApp = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>

            <Content className={stylesheet.siteLayout}>
                <Breadcrumb className={stylesheet.breadcrumb}>
                    <Breadcrumb.Item>Главная</Breadcrumb.Item>
                    <Breadcrumb.Item></Breadcrumb.Item>
                    <Breadcrumb.Item></Breadcrumb.Item>
                </Breadcrumb>

                <Layout className={stylesheet.container} style={{background: colorBgContainer }}>
                    <Sider className={stylesheet.sider} style={{ background: colorBgContainer }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>

                    <Content className={stylesheet.content}>                       
                        <TableApp/>
                    </Content>

                </Layout>
            </Content>
            <Footer></Footer>
        </Layout>
    );
};

export default ContentApp;