import {FC, useEffect, useLayoutEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {sending} from "../../api/types";
import {getGenre, getSending} from "../../api/service";
import Sendings from "../../components/sending/sendings";
import Genre from "../../components/genre/genre";

const UserPage: FC = () => {
  let location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('id')
  
  const [sendings, setSendings] = useState<sending[] | null>([])
  const [genres, setGenres] = useState<any[]>([])
  const sortSending = sendings?.filter(sending => sending.user_id.toString() === id) || []
  
  const isActive = (genreId: number) => Boolean(sortSending.find(sending => sending.genre_id ===genreId))
  
  const sendingId = (genreId: number) => sortSending.find(sending => sending.genre_id ===genreId)?.id.toString()||null
  
  const name = sortSending[0]?.user_name||'..'
  
  useEffect(() => {
    getSending().then(setSendings)
    getGenre().then(setGenres)
  }, [])
  
  useEffect(() => {
  }, [sendings])
  return (
    <>
    <h1>{name}</h1>
    <ul style={{display:"flex", flexWrap:'wrap', gap:'20px', listStyleType:'none', padding:'20px'}}>
      {genres.map(genre => <Genre genre={genre} isActive={isActive(genre.id)} userId={id || ''} sendingId={sendingId(genre.id)}/>)}
    </ul></>
  );
};

export default UserPage;