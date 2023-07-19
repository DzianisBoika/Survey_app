import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderApp from './Layouts/Header/Header';
import ContentApp from './Layouts/Content/Content';

const App = () => {
  return (
    <>
      <HeaderApp />
      <ContentApp />
    </>
  );
};

export default App;