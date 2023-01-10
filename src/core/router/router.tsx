import {FC} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../../pages/main/main";
import Users from "../../components/user/users";

export enum RouteNames {
  MAIN = "/",
  USER = "/user",

}


export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export const routes: IRoute[] = [
  {path: RouteNames.MAIN, element: <Main/>},
  {path: RouteNames.USER, element: <Users users={[]}/>},
  {path: "*", element: <Main/>},
];

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element}  key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;