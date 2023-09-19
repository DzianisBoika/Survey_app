import React from 'react';
import { Button, Layout } from 'antd';
import stylesheet from '../Assets/Styles/Content.module.scss';
import TableApp from './Table.tsx'; 
import SurveyForm from './SurveyForm.tsx';

const { Content } = Layout;

const ContentApp: React.FC = () => {
  return (
    
    <div className={stylesheet.container}>
      
      <Content className={stylesheet.content}>
        <TableApp /> 
        <Button type="primary" className={stylesheet.button} >Создать новый опрос</Button>
      </Content>
      
      </div>
    
  );
};

export default ContentApp;