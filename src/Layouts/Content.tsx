import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import stylesheet from '../Assets/Styles/Content.module.scss';
import TableApp from './Table.tsx'; 
import SurveyForm from './SurveyForm.tsx';

const { Content } = Layout;

const ContentApp: React.FC = () => {
  return (
    
    <div className={stylesheet.container}>
      <Content className={stylesheet.content}>
        <Routes>
          <Route path='/' element={<TableApp />} /> 
        </Routes>
        <Routes>
          <Route path='/' element={<Button type="primary" href='/survey' className={stylesheet.button} >Создать новый опрос</Button>} />
        </Routes>
        <Routes>
          <Route path='/survey' element={<SurveyForm />} />
        </Routes>
      </Content>
      </div>
    
  );
};

export default ContentApp;