import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainNavigation from "../components/shared/MainNavigation";
import AllArena from "../pages/AllArena";
import AllAthlete from "../pages/AllAthlete"
import CreateArena from "../pages/CreateArena"
import CreateAthlete from "../pages/CreateAthlete"
import EditArena from "../pages/EditArena"
import EditAthlete from "../pages/EditAthlete"
import HomePage from "../pages/HomePage"

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />

      <Container>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/AllArena" component={AllArena}></Route>
          <Route path="/AllAthlete" component={AllAthlete}></Route>
          <Route path="/CreateArena" component={CreateArena}></Route>
          <Route path="/CreateAthlete" component={CreateAthlete}></Route>
          <Route path="/EditArena" component={EditArena}></Route>
          <Route path="/EditAthlete" component={EditAthlete}></Route>
          <Route path="/HomePage" component={HomePage}></Route>
        </Switch>
      </Container>

    </BrowserRouter>
  );
};

export default Routing;
