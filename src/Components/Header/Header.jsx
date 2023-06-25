import React from 'react';
import stylesheet from './Header.module.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderApp = (props) => {
    return (
        <div className='app-wrapper'>
            <Layout className={stylesheet}>
                <Header>
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={new Array(3).fill(null).map((_, index) => ({
                            key: String(index + 1),
                            label: `nav ${index + 1}`,
                        }))}
                    />
                </Header>
            </Layout>
        </div>
    );
};

export default HeaderApp;