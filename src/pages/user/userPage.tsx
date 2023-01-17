import {FC, useEffect, useState} from 'react';
import {Link, useLocation,} from "react-router-dom";
import {sending} from "../../api/types";
import {getGenre, getSending} from "../../api/service";


import {Spin} from "antd";

import Genre from "../../components/genre/genre";
import {RouteNames} from "../../core/router/router";

const UserPage: FC = () => {
  let location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id')
  
  const [sendings, setSendings] = useState<sending[] | null>([])
  const [genres, setGenres] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  
  const sortSending = sendings ? [...sendings]?.filter(sending => sending.user_id.toString() === id) : []
  
  const isActive = (genreId: number) => Boolean(sortSending.find(sending => sending.genre_id === genreId))
  
  const sendingId = (genreId: number) => sortSending.find(sending => sending.genre_id === genreId)?.id.toString() || null
  
  const name = isLoading ? '...' : sortSending[0]?.user_name || 'Нет активных подписок'
  
  useEffect(() => {
    setIsLoading(true)
    Promise.all([getSending().then((data) => {
      setSendings(data)
    }),
      getGenre().then((data) => {
        setGenres(data)
      })]).then(() => setIsLoading(false))
  }, [])
  
  
  return (
    <>
      <h1><Link to={RouteNames.MAIN} style={{textDecoration:'none', color:"white"}}>Получатели</Link> / {name}</h1>
      <ul style={{display: "flex", flexWrap: 'wrap', gap: '20px', listStyleType: 'none', padding: '20px'}}>
        {
          isLoading ? <Spin/> :
            genres.map(genre => <Genre genre={genre} key={genre.id}
                                       isActive={isActive(genre.id)}
                                       userId={id || ''}
                                       sendingId={sendingId(genre.id)}/>)}
      </ul>
    </>
  );
};

export default UserPage;