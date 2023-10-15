import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Outlet />}></Route>)
);
