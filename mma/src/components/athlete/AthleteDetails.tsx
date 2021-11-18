import { FC, useContext, useEffect, useState } from "react";
import { IAthlete } from "../../interfaces/IAthlete";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AthleteContext } from "../../contexts/AthleteContext";
import { AthleteContextType } from "../../types/AthleteContextType";
import AthleteItem from "./AthleteItem";

const AthleteDetails: FC<IAthlete> = ({ name, image }) => {

    const {athletes} = useContext(AthleteContext) as AthleteContextType;

    const {id} = useParams();

    const [athlete, setAthlete] = useState<IAthlete>();

    // useEffect( () => {
    //     if (id) {
    //         const _athlete = getAthletesById(id)
    //         setAthlete(_athlete);
    //     }
    // }, [])

    return (
        <>
        <div>{id}</div>
        <div>{name}</div>
        <div>{image}</div>
        </>
    )
};

export default AthleteDetails;
