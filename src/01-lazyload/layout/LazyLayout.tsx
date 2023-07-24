import { Link, Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout";
import { LazyPage, LazyPage2, LazyPage3 } from "../pages";
import NavigationLazy from "../router/NavigationLazy";

const LazyLayout = () => {
  return (
    <>
      <Layout>
        <h1 className="text-xl font-bold text-white">LazyLayout Page</h1>

        <ul>
          <li>
            <Link to={"lazy1"}>Lazy1</Link>
          </li>
          <li>
            <Link to={"lazy2"}>Lazy2</Link>
          </li>
          <li>
            <Link to={"lazy3"}>Lazy3</Link>
          </li>
        </ul>
        <NavigationLazy />
      </Layout>
      {/* <NavigationLazy /> */}
    </>
  );
};

export default LazyLayout;
