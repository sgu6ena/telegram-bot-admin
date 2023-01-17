import {FC, useEffect, useState} from 'react';
import {getUser} from "../../api/service";
import { user} from "../../api/types";
import Users from '../../components/user/users';
import Bender from "../../components/bender/bender";


const Main: FC = () => {
  
  const [users, setUsers] = useState<user[]|null>(null)
  
  useEffect(() => {
    getUser().then(setUsers)
  }, [])
  
  return (
    <div>
      <h1>Получатели</h1>
      <Users users={users}/>
      {/*<Bender/>*/}
    </div>
  );
};

export default Main;