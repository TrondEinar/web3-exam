import { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllAthlete from "../pages/AllAthlete";
import OneAthlete from "../pages/OneAthlete";
import MainNavigation from "../components/shared/MainNavigation";
import Home from "../pages/Home";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Container>
        <Routes>
          <Route path="/athletes" element={<AllAthlete />}></Route>
          <Route path="/athlete" element={<OneAthlete />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
