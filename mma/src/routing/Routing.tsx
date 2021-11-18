import { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AllAthlete from "../pages/AllAthlete";
import MainNavigation from "../components/shared/MainNavigation";
import Home from "../pages/Home";
import AthleteDetailsPage from "../pages/AthleteDetailsPage";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Container>
        <Routes>
          <Route path="/athletes" element={<AllAthlete />}></Route>
        </Routes>
        <Routes>
        <Route path="/athletes-details/:id" element={<AthleteDetailsPage />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
