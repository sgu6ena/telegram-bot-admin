import {FC} from 'react';
import {Link} from "react-router-dom";
import {RouteNames} from "../../core/router/router";
import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {genre} from "../../api/types";

const Genre: FC<{ genre: genre, active: boolean, userId: string }> = ({genre, active, userId}) => {
  return (
    <li style={{width: '400px'}}>
      <Card bordered={false} style={{width: '100%'}}>
        <Meta
          avatar={active ? <Avatar style={{backgroundColor: '#009900', verticalAlign: 'middle'}}
                                   size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64}}> ✓ </Avatar> :
            <Avatar style={{backgroundColor: '#999999', verticalAlign: 'middle'}}
                    size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64}}>+</Avatar>}
          title={genre.alias}
          description={active ? 'активно' : 'не активно'}
        />
      </Card>
    
    </li>
  );
};

export default Genre;