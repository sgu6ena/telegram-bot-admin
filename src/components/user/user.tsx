import {FC} from 'react';
import {user} from "../../api/types";
import {Avatar, Card} from "antd";
import styles from './users.module.scss'
import Meta from "antd/es/card/Meta";
import {RouteNames} from "../../core/router/router";
import {Link} from "react-router-dom";

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const User: FC<{ user: user }> = ({user}) => {
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
            description={`активно: ${user.active === 1 ? "да" : "нет"}`}
          />
        </Card>
      </Link>
    </li>
  );
};

export default User;