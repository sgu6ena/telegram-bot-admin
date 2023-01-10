import {FC, useEffect, useState} from 'react';

import {Segmented, Tabs} from 'antd';
import Bender from "../../components/bender/bender";
import {getGenre, getSending, getUser} from "../../api/service";
import {genre, sending, user} from "../../api/types";
import Users from '../../components/user/users';
import Genres from '../../components/genre/genres';
import Sendings from '../../components/sending/sendings';



const items = [
  {label: 'Новый пользователь', key: 'item-1', children: 'Content 1',}, // remember to pass the key prop
  {label: 'Все пользователи', key: 'item-2', children: 'Content 2'},
];

const Main: FC = () => {
  
  const [users, setUsers] = useState<user[]|null>(null)
  const [genres, setGenres] = useState<genre[]|null>(null)
  const [sendings, setSendings] = useState<sending[]|null>(null)
  
  useEffect(() => {
    getUser().then(setUsers)
    getGenre().then(setGenres)
    getSending().then(setSendings)
  }, [])
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
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Segmented size="large" options={['Юзеры', 'Рассылки']}/>
      </div>
      <Users users={users}/>
      <Genres genres={genres}/>
      <Sendings sendings={sendings}/>
      
      
      {/*<Bender/>*/}
    </div>
  );
};

export default Main;