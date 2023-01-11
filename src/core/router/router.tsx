import {FC} from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "../../pages/main/main";
import UserPage from "../../pages/user/userPage";

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
  {path: RouteNames.USER, element: <UserPage/>},
  {path: "*", element: <Main/>},
];

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element}  key={route.path} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;