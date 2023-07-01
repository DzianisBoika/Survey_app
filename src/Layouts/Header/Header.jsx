import React from 'react';
import stylesheet from '../../Assets/Styles/Header.module.scss';
import { Layout, Menu } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Button } from 'antd';
const { Header } = Layout;


const HeaderApp = (props) => {
    return (
        <div className='app-wrapper'>
            <Layout className={stylesheet}>
                <Header>
                    <div className={stylesheet.container}>
                        <Avatar
                            size={{ xs: 10, sm: 20, md: 30, lg: 40, xl: 50, xxl: 60 }}
                            icon={<AntDesignOutlined />}
                        />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            items={new Array(3).fill(null).map((_, index) => ({
                                key: String(index + 1),
                                label: `nav ${index + 1}`,
                            }))}
                            />
                    </div>


                    <Button className={stylesheet.ButtonExit} type="primary" shape="circle" size={'small'} danger>
                        X
                    </Button>
                </Header>
            </Layout>
        </div>
    );
};

export default HeaderApp;