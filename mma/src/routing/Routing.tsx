import { FC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllAthlete from "../pages/AllAthlete"


const Routing: FC = () => {
  return (
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Alle utøvere</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<AllAthlete />}></Route>
    </Routes>
    </BrowserRouter>
  );
};

export default Routing;
