import { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllAthlete from "../pages/AllAthlete";
import MainNavigation from "../components/shared/MainNavigation";
import Home from "../pages/Home";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Container>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/athletes" element={<AllAthlete />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
