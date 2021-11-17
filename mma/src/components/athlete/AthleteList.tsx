import { FC, useState, useEffect } from "react";
import { athleteService } from "../../services/athleteService";
import { IAthlete } from "../../interfaces/IAthlete";
import AthleteItem from "./AthleteItem";
import { Container, Col, Row } from "react-bootstrap";

const AthleteList: FC = () => {
  const [athletes, setAthletes] = useState<IAthlete[]>();

  useEffect(() => {
    getAllAthletes();
    
  }, []);

  const getAllAthletes = async () => {
    const result = await athleteService.getAllAthletes();
    setAthletes(result);
  };

  const createAthleteList = () => {
    return athletes?.map((athlete: IAthlete, key: number) => {
      return (
        <Col key={key}>
          <AthleteItem name={athlete.name} image={athlete.image} />
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {createAthleteList()}
      </Row>
    </Container>
  );
};

export default AthleteList;
