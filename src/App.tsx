import React from 'react';
import Main from "./pages/main/main";
import Layout from "./components/layout/layout";
import { ConfigProvider } from 'antd';
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#279ad1',
          fontSize:18,
          padding:30,
          colorBorder:'white'
        },
      }}
    >      <Layout>
      <Main/>
    </Layout>
    </ConfigProvider>

  );
}

export default App;
