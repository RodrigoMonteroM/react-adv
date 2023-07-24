import { Link } from "react-router-dom";
import ReactIcon from "../assets/img/react-js-icon.svg";
import {routes} from "../routes/routes";


const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-500 flex flex-col items-center">
      <img src={ReactIcon} className="w-24 h-24 my-10" />
      {
        routes.map((route) => {
          return <Link key={route.name} to={route.to} >{route.name}</Link>
        })
      }
    </div>
  );
};

export default Sidebar;
/*
git remote add origin https://github.com/RodrigoMonteroM/react-adv.git
git branch -M main
git push -u origin main
*/