import {FC, useState} from 'react';
import {user} from "../../api/types";
import {Avatar, Card, Spin} from "antd";
import User from "./user";
import styles from './users.module.css'
import Meta from "antd/es/card/Meta";
import AddNewModal from "./addNewModal";

const Users: FC<{ users: user[] | null }> = ({users}) => {
  
  
  const [isShowModal, setIsShowModal] = useState(false)
  
  return (
    <div className={styles.users}>
      <ul>
        {users ? users.map(user => <User user={user} key={user.id}/>) : <Spin/>}
        <li>
          
          <Card bordered={false} onClick={() => setIsShowModal(true)}>
            <Meta style={{display: 'flex', justifyContent: 'start'}}
                  avatar={<Avatar style={{backgroundColor: '#9966CC',}}
                                  size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64}}>
                    +
                  </Avatar>}
                  title="Добавить"
                  description={'получателя'}
            />
          </Card>
        
        </li>
      </ul>
      <AddNewModal setIsShowModal={setIsShowModal} isShowModal={isShowModal}/>
    </div>
  );
};

export default Users;