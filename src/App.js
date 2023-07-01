import React from 'react';
import './App.css';
import { Layout } from 'antd';
import HeaderApp from './Layouts/Header/Header';
import MainApp from './Layouts/Main/Main';
import FooterApp from './Layouts/Footer/Footer';

const App = (props) => {
  return (
      <Layout>
        <HeaderApp/>
        <MainApp/>
        <FooterApp/>
      </Layout>
  );
};

export default App;