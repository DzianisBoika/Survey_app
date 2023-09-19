import React from 'react';
import HeaderApp from './Layouts/Header.tsx';
import ContentApp from './Layouts/Content.tsx';
import SiderApp from './Layouts/Sider.tsx';
import stylesheet from './Assets/Styles/App.module.scss';
import FooterApp from './Layouts/Footer.tsx';


const App: React.FC = () => {
  return (
    <>
      <HeaderApp />
      <div className={stylesheet.siderContent}>
        <SiderApp />
        <ContentApp /> 
      </div>
      <FooterApp />
    </>
  );
};

export default App;
