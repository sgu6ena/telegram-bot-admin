import {FC, useEffect, useState} from 'react';

import {Segmented, Tabs} from 'antd';
// import Bender from "../../components/bender/bender";
import {getGenre, getSending, getUser} from "../../api/service";
import {genre, sending, user} from "../../api/types";
import Users from '../../components/user/users';
import Genres from '../../components/genre/genres';
import Sendings from '../../components/sending/sendings';
import Bender from "../../components/bender/bender";


const Main: FC = () => {
  
  const [users, setUsers] = useState<user[]|null>(null)
  // const [genres, setGenres] = useState<genre[]|null>(null)
 
  
  useEffect(() => {
    getUser().then(setUsers)
    // getGenre().then(setGenres)

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
      {/*<div style={{display: 'flex', justifyContent: 'center'}}>*/}
      {/*  <Segmented size="large" options={['Юзеры', 'Рассылки']}/>*/}
      {/*</div>*/}
      <Users users={users}/>
      {/*<Genres genres={genres}/>*/}
      {/*<Sendings sendings={sendings}/>*/}
      
      
      <Bender/>
    </div>
  );
};

export default Main;