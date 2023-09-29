import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Food from "./../pages/Food";
import Services from "../pages/Services";
import Repair from "../pages/Repair";

export interface routerItemInterface {
  path: string
  element: JSX.Element
}


export interface routerDictInterface {
  root: routerItemInterface
  food: routerItemInterface
  services: routerItemInterface
  repair: routerItemInterface
}


export const routerDict: routerDictInterface = {
  root: {
    path: '/',
    element: <App />,
  },
  food: {
    path: '/food',
    element: <Food />,
  },
  services: {
    path: '/services',
    element: <Services />,
  },
  repair: {
    path: '/repair',
    element: <Repair />,
  }
}

export const router = createBrowserRouter(Object.values(routerDict))