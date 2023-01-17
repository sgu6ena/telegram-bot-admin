import React from 'react';

import Layout from "./components/layout/layout";
import {ConfigProvider} from 'antd';
import AppRouter from "./core/router/router";


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#279ad1',
          fontSize: 18,
          padding: 30,
          colorBorder: 'gray'
        },
      }}
    >
      <Layout>
        <AppRouter/>
      </Layout>
    </ConfigProvider>
  
  );
}

export default App;
