import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Food from "./../pages/Food";
import Services from "../pages/Services";
import Repair from "../pages/Repair";
import Cafe from "../pages/Cafe";
import Travel from "../pages/Travel";

export interface routerItemInterface {
  path: string
  element: JSX.Element
}


export interface routerDictInterface {
  root: routerItemInterface
  food: routerItemInterface
  services: routerItemInterface
  repair: routerItemInterface
  cafe: routerItemInterface
  travel: routerItemInterface
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
  },
  cafe: {
    path: '/cafe',
    element: <Cafe />,
  },
  travel: {
    path: '/travel',
    element: <Travel />,
  },
}

export const router = createBrowserRouter(Object.values(routerDict))