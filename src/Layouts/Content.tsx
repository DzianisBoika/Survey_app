import React from 'react';
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import stylesheet from '../Assets/Styles/Content.module.scss';
/* import TableApp from './Table.tsx'; */ 
import SurveyForm from './SurveyForm.tsx';

const { Content, Footer, Sider } = Layout;

// сайдер
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

const ContentApp: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={stylesheet.container}>
      <Content className={stylesheet.siteLayout}>
        <Breadcrumb className={stylesheet.breadcrumb}>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Новый опрос</Breadcrumb.Item>
        </Breadcrumb>

        <Layout className={stylesheet.container} style={{ background: colorBgContainer }}>
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
            {/*<TableApp /> */}
            <SurveyForm />
          </Content>
        </Layout>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};

export default ContentApp;