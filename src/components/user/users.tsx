import {FC} from 'react';
import {user} from "../../api/types";
import {Spin} from "antd";
import User from "./user";
import styles from './users.module.css'

const Users: FC<{ users: user[] | null }> = ({users}) => {
  return (
    <div className={styles.users}>
      
      {/*пользователи*/}
      <ul>
        {users ? users.map(user => <User user={user}/>) : <Spin/>}
      </ul>
    
    </div>
  );
};

export default Users;