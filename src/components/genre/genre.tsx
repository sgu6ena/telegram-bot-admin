import {FC} from 'react';
import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {genre} from "../../api/types";
import {deleteSending, postSending} from "../../api/service";

const Genre: FC<{ genre: genre, isActive: boolean, userId: string, sendingId:string|null }> = ({genre, isActive, userId, sendingId}) => {
  const handler = () => {
    if (isActive) {
      deleteSending(sendingId||'').then(console.log)
    } else {
      postSending(userId, genre.id).then(console.log)
    }
  }
  return (
    <li style={{width: '400px', maxWidth: '100%'}}>
      <Card bordered={false} style={{width: '100%'}} onClick={handler}>
        <Meta
          avatar={<Avatar style={{backgroundColor: isActive ? '#009900' : '#999999', verticalAlign: 'middle'}}
                          size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64}}> {isActive ? '✓' : '+'} </Avatar>}
          title={genre.alias}
          description={isActive ? 'активно' : 'не активно'}
        />
      </Card>
    
    </li>
  );
};

export default Genre;