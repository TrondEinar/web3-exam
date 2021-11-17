import { FC } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Card, Button, Container, Col, Row, Image } from "react-bootstrap";

const AthleteItem: FC<IAthlete> = ({ id, name, image }) => {
  return (
    <Card>
      <Row>
        <Col>
          <Row>
            <Card.Title>{name}</Card.Title>
          </Row>
          <Row>Alder</Row>
          <Row>Vektklasse</Row>
          <Row>Kampsportstil</Row>
          <Row>Kamphistorikk</Row>
          <Row>Nasjonalitet</Row>
          <Row>Hjemmearena</Row>
        </Col>
        <Col>
          <Card.Img
            variant="top"
            src={`https://localhost:5001/images/${image}`}
            alt={name}
          ></Card.Img>
        </Col>
      </Row>
    </Card>
  );
};

export default AthleteItem;
