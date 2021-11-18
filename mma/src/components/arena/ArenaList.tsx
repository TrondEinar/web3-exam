import { FC, useContext} from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import ArenaItem from "./ArenaItem";
import { Container, Col, Row } from "react-bootstrap";
import { AthleteContext } from "../../contexts/AthleteContext";
import { AthleteContextType } from "../../types/AthleteContextType";

const ArenaList: FC = () => {

  const {athletes} = useContext(AthleteContext) as AthleteContextType;

  const createArenaList = () => {
    return athletes.map((athlete: IAthlete, key: number) => {
      return (
        <Col key={key}>
          <ArenaItem name={athlete.name} image={athlete.image} />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {createArenaList()}
      </Row>
    </Container>
  );
};

export default ArenaList;
