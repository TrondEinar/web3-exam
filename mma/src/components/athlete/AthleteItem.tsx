import { FC } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Card, Button } from "react-bootstrap";
import { useState } from "react"
import BaseModalWrapper from "../Modal/BaseModalWrapper";
import AthleteList from "./AthleteList";

const AthleteItem: FC<IAthlete> = ({ id, name, image }) => {

  const [isModalVissible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

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
        <Button variant="primary" onClick={toggleModal}>Se mer</Button>
        <BaseModalWrapper isModalVisible={isModalVissible} onBackdropClick={toggleModal}/>
      </Card.Body>
    </Card>
  );
};

export default AthleteItem;
