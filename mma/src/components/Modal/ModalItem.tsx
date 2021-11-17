import { FC } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Card } from "react-bootstrap";

const ModalItem: FC<IAthlete> = ({ id, name, image }) => {

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={`https://localhost:5001/images/${image}`}
        alt={name}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Her kommer det mere info!</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ModalItem;