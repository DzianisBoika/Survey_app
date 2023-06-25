import React from 'react';
import stylesheet from './Content.module.css';
import MainButton from '../MainButton/MainButton';
import { Breadcrumb, Layout, theme } from 'antd';

const { Content } = Layout;

const ContentApp = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div className='app-wrapper'>
            <Layout>
                <Content className={stylesheet.siteLayout}>

                    <Breadcrumb className={stylesheet.Breadcrumb}>
                        <Breadcrumb.Item>Главная</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className={stylesheet.content} style={{ background: colorBgContainer }}>

                        <MainButton />
                    </div>
                </Content>
            </Layout>
        </div>
    );
};

export default ContentApp;