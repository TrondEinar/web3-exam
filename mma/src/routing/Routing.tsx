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
          <Route path="/allarena" component={AllArena}></Route>
          <Route path="/allathlete" component={AllAthlete}></Route>
          <Route path="/createarena" component={CreateArena}></Route>
          <Route path="/createathlete" component={CreateAthlete}></Route>
          <Route path="/editarena" component={EditArena}></Route>
          <Route path="/editathlete" component={EditAthlete}></Route>
          <Route path="/homepage" component={HomePage}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
