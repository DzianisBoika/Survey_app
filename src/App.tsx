import React from 'react';
import HeaderApp from './Layouts/Header.tsx';
import ContentApp from './Layouts/Content.tsx';

const App: React.FC = () => {
  return (
    <>
      <HeaderApp />
      <ContentApp />
    </>
  );
};

export default App;
