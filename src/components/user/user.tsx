import {FC, useState} from 'react';
import {user} from "../../api/types";
import {Avatar, Card, Switch} from "antd";
import styles from './users.module.scss'
import Meta from "antd/es/card/Meta";
import {RouteNames} from "../../core/router/router";
import {Link} from "react-router-dom";
import {postUser, putUser} from "../../api/service";

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const User: FC<{ user: user }> = ({user}) => {
  const [isActive, setIsActive] = useState(user.active === 1)
  const [isLoadnig, setIsLoading] = useState(false)
  const changeActive = (value: boolean, event: any) => {
    event.preventDefault()
    setIsLoading(true)
    putUser(user.id.toString(), {
      login: user.login,
      name: user.name,
      active: value ? 1 : 0
    }).then( ()=> {
      setIsActive(!isActive)
      setIsLoading(false)
    })
   
  }
  return (
    <li>
      <Link to={`${RouteNames.USER}?id=${user.id}`} style={{textDecoration: 'none'}}>
        <Card bordered={false}>
          <Meta
            avatar={
              <Avatar
                style={{backgroundColor: ColorList[user.id % ColorList.length], verticalAlign: 'middle'}}
                size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64}}>
                {user.name[0]}
              </Avatar>}
            title={user.name}
          
          />
          <Switch loading={isLoadnig}
            style={{marginLeft: '80px', marginTop:'10px'}} title={'активный'}
                  onChange={(value, event) => changeActive(value, event)}
                  checkedChildren={'Рассылка включена'}
                  unCheckedChildren={'Рассылка выключена'}
                  checked={isActive}
          />
        </Card>
      </Link>
    </li>
  );
};

export default User;