import React from 'react';
import { Layout } from 'antd';
import stylesheet from '../Assets/Styles/Content.module.scss';
import TableApp from './Table.tsx'; 
import SurveyForm from './SurveyForm.tsx';

const { Content } = Layout;

const ContentApp: React.FC = () => {
  return (
    <div className={stylesheet.container}>
      <Content>
        <TableApp /> 
        
      </Content>
      
    </div>
  );
};

export default ContentApp;