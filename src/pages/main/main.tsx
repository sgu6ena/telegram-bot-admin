import {FC } from 'react';

import {Segmented, Tabs} from 'antd';
import Bender from "../../components/bender/bender";
const items = [
  { label: 'Добавление нового пользователя', key: 'item-1', children: 'Content 1', }, // remember to pass the key prop
  { label: 'Все пользователи', key: 'item-2', children: 'Content 2' },
];

const Main:FC = () => {

  return (
    <div>
      {/*<Tabs*/}
      {/*  tabBarStyle={{color: 'white', fontSize:'45px'}}*/}
      {/*  centered*/}
      {/*  */}
      {/*  tabBarGutter={10}*/}
      {/*  defaultActiveKey="1"*/}
      {/*  type="card"*/}
      {/*  size='large'*/}
      {/*  items={items}*/}
      {/*/>*/}
      <div style={{display:'flex', justifyContent:'center'}}><Segmented  size="large" options={['Новый пользователь', 'Все пользователи']} /></div>
      
      <Bender/>
    </div>
  );
};

export default Main;