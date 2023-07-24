import { Link } from "react-router-dom";
import ReactIcon from "../assets/img/react-js-icon.svg";
const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-500 flex flex-col items-center">
      <img src={ReactIcon} className="w-24 h-24 my-10" />
      <Link to="/">lazy1</Link>
      <Link to="/lazypage2">Lazy2</Link>
      <Link to="/lazypage3">lazy3</Link>
    </div>
  );
};

export default Sidebar;
/*
git remote add origin https://github.com/RodrigoMonteroM/react-adv.git
git branch -M main
git push -u origin main
*/