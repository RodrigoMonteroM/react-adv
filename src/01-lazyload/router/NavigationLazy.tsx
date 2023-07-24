import { Route, Routes } from "react-router-dom";
import { LazyPage, LazyPage2, LazyPage3 } from "../pages";

const NavigationLazy = () => {
  return (
    <Routes>
      <Route path="lazy" element={<LazyPage />} />
      <Route path="lazy2" element={<LazyPage2 />} />
      <Route path="lazy3" element={<LazyPage3 />} />
    </Routes>
  );
};

export default NavigationLazy;
