import { FC, useState, useEffect } from "react";
import { arenaService } from "../../services/arenaService";
import { IAthlete } from "../../interfaces/IAthlete";
import ArenaItem from "../arena/ArenaItem"
import { Container, Col, Row } from "react-bootstrap";

// bruker collection til Athlete frem til Arnea får egen collection

const ArenaList: FC = () => {
  const [arena, setArena] = useState<IAthlete[]>();

  useEffect(() => {
    getAllArena();
    
  }, []);

  const getAllArena = async () => {
    const result = await arenaService.getAllArena();
    setArena(result);
  };

  const createArenaList = () => {
    return arena?.map((athlete: IAthlete, key: number) => {
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