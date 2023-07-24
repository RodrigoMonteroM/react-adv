import { LazyExoticComponent, lazy } from "react";
import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const lazy1 = lazy(() => import(/* webpackChuckName: "lazychuk1" */ "../01-lazyload/pages/LazyPage")) 
const lazy2 = lazy(() => import(/* webpackChuckName: "lazychuk2" */ "../01-lazyload/pages/LazyPage2")) 
const lazy3 = lazy(() => import(/* webpackChuckName: "lazychuk3" */ "../01-lazyload/pages/LazyPage3")) 

type JSXComponent = () => JSX.Element 

interface Route {
  to: string;
  path: string;
  Component:  LazyExoticComponent<JSXComponent> | JSXComponent 
  name: string;
}

export const routes: Array<Route> = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "lazy-2",
  },
  { 
    to: "/lazy3",
    path: "lazy3",
    Component: lazy3,
    name: "lazy-3",
  },
];
