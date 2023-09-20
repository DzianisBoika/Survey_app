import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HeaderApp from './Layouts/Header.tsx';
import ContentApp from './Layouts/Content.tsx';
import SiderApp from './Layouts/Sider.tsx';
import stylesheet from './Assets/Styles/App.module.scss';


const App: React.FC = () => {
  return (
    <>
      <HeaderApp />
      <div className={stylesheet.siderContent}>
        <SiderApp />
        <ContentApp  />
      </div>
    </>
  );
};

export default App;
