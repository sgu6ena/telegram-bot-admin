import {FC } from 'react';

import {  Tabs } from 'antd';


const Main:FC = () => {

  return (
    <div>

      <Tabs
        defaultActiveKey="1"
        type="card"
        items={[]}
      />
    </div>
  );
};

export default Main;