import React from 'react';
import './App.css';
import { Layout } from 'antd';
import HeaderApp from './Components/Header/Header';
import ContentApp from './Components/Content/Content';
import FooterApp from './Components/Footer/Footer';

const App = (props) => {
  return (
      <Layout>
        <HeaderApp/>
        <ContentApp/>
        <FooterApp/>
      </Layout>
  );
};

export default App;