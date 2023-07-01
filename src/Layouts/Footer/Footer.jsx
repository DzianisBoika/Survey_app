import React from 'react';
import stylesheet from '../../Assets/Styles/Footer.module.scss';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterApp = (props) => {
    return (
        <div className={stylesheet.Footer}>
            <Layout>
                <Footer>2023</Footer>
            </Layout>
        </div>
    );
};

export default FooterApp;