import { FC, useState, useEffect } from "react";
import { athleteService } from "../../services/athleteService";
import { IAthlete } from "../../interfaces/IAthlete";
import AthleteInfoItem from "./AthleteInfoItem";
import { Container, Col, Row } from "react-bootstrap";

const AthleteInfoList: FC = () => {
  const [athletes, setAthletes] = useState<IAthlete[]>();

  useEffect(() => {
    getOneAthlete();
  }, []);

  const getOneAthlete = async () => {
    const result = await athleteService.getOneAthlete();
    setAthletes(result);
  };

  const createAthleteList = () => {
    return athletes?.map((athlete: IAthlete, key: number) => {
      return (
        <Col key={key}>
          <AthleteInfoItem name={athlete.name} image={athlete.image} />
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

export default AthleteInfoList;
