import {FC} from 'react';
import {user} from "../../api/types";
import {Avatar, Card, Spin} from "antd";
import User from "./user";
import styles from './users.module.css'
import Meta from "antd/es/card/Meta";

const Users: FC<{ users: user[] | null }> = ({users}) => {
  return (
    <div className={styles.users}>
      <ul>
        {users ? users.map(user => <User user={user}/>) : <Spin/>}
        <li>
          
          <Card bordered={false} >
            <Meta style={{display:'flex', justifyContent:'center'}}
              avatar={<Avatar style={{backgroundColor: '#9966CC', }}size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64}}>
                +
              </Avatar>}
              title="Добавить"
                  description={'нового получателя'}
            />
          </Card>
        </li>
      </ul>
    </div>
  );
};

export default Users;