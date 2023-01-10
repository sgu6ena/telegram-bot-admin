import {FC} from 'react';
import {sending} from "../../api/types";
import {Spin} from "antd";

const Sendings: FC<{ sendings: sending[] | null}> = ({sendings}) => {
  return (
    <div>
      пользователи и рассылки
      <ul>
        {sendings? sendings.map(sending => <li>{sending.user_name}:
          <ul>
            <li>{sending.genre_name}</li>
          </ul>
        </li>): <Spin />}
      </ul>
    </div>
  );
};

export default Sendings;