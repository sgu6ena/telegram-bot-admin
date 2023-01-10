import {FC} from 'react';
import {genre} from "../../api/types";
import {Spin} from "antd";

const Genres: FC<{ genres: genre[]| null }> = ({genres}) => {
  return (
    <div>
      
      жанры
      <ul>
        {genres?genres.map(genre => <li>{genre.alias}</li>): <Spin />}
      </ul>
    
    </div>
  );
};

export default Genres;