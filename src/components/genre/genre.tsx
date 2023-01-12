import {FC, useState} from 'react';
import {Avatar, Card, Spin} from "antd";
import Meta from "antd/es/card/Meta";
import {genre} from "../../api/types";
import {deleteSending, postSending} from "../../api/service";

const Genre: FC<{ genre: genre, isActive: boolean, userId: string, sendingId: string | null, }> = ({
                                                                                                                                                                 genre,
                                                                                                                                                                 isActive,
                                                                                                                                                                 userId,
                                                                                                                                                                 sendingId,
  
                                                                                                                                                               }) => {
  
  const [active, setActive] = useState(isActive)
  const [isLoading, setIsLoading] = useState(false)
  const handler = async () => {
    setIsLoading(true)
    if (isActive) {
      await deleteSending(sendingId || '').then(() => {
        setActive(!active)
      })
    } else {
      await postSending(userId, genre.id.toString()).then(() => {
        setActive(!active)
      })
    }
    setIsLoading(false)
  }
  return (
    <li style={{width: '400px', maxWidth: '100%'}}>
      <Card bordered={false} style={{width: '100%'}} onClick={handler}>
        <Meta
          avatar={<Avatar style={{backgroundColor: active ? '#009900' : '#999999', verticalAlign: 'middle'}}
                          size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 64, xxl: 64}}> {isLoading ?
            <Spin style={{color:'white'}}/> : active ? '✓' : '+'} </Avatar>}
          title={genre.alias}
          description={isLoading ? ' . . . ' : active ? 'активно' : 'не активно'}
        />
      </Card>
    </li>
  );
};

export default Genre;