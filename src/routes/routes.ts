import { LazyExoticComponent, lazy } from "react";
/* import { LazyPage, LazyPage2, LazyPage3 } from "../01-lazyload/pages"; */
import { NoLazy } from "../01-lazyload/pages";


const lazy1 = lazy(() => import(/* webpackChuckName: "lazychuk1" */ "../01-lazyload/pages/LazyPage")) 
const lazy2 = lazy(() => import(/* webpackChuckName: "lazychuk2" */ "../01-lazyload/pages/LazyPage2")) 
const lazy3 = lazy(() => import(/* webpackChuckName: "lazychuk3" */ "../01-lazyload/pages/LazyPage3")) 
const LazyLayout = lazy( () => import(/* webpackChuckName: "layoutLazy" */ "../01-lazyload/layout/LazyLayout"))

type JSXComponent = () => JSX.Element 

interface Route {
  to: string;
  path: string;
  Component:  LazyExoticComponent<JSXComponent> | JSXComponent 
  name: string;
}

export const routes: Array<Route> = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "dash board",
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
  { 
    to: "/nolazy",
    path: "no lazy",
    Component: NoLazy,
    name: "No lazy",
  },
];
