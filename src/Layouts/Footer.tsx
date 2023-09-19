import React from 'react';
import stylesheet from '../Assets/Styles/Footer.module.scss';
import { Layout } from 'antd';
const { Footer } = Layout;


const FooterApp: React.FC = () => {
    return (
    <>
        <Footer className={stylesheet.footer}></Footer>
    </>
    );
};

export default FooterApp;
