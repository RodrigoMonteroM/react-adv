import { Link } from "react-router-dom";
import ReactIcon from "../assets/img/react-js-icon.svg";
const Sidebar = () => {
  return (
    <div className="h-screen bg-blue-500 flex flex-col items-center">
      <img src={ReactIcon} className="w-24 h-24 my-10" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Sidebar;
