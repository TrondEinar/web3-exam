import { FC, useState, useEffect } from "react";
import { athleteService } from "../../services/athleteService";
import { IAthlete } from "../../interfaces/IAthlete";
import AthleteItem from "./AthleteItem";

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
        <AthleteItem key={key} name={athlete.name} image={athlete.image} />
      );
    });
  };

  return <section>{createAthleteList()}</section>;
};

export default AthleteList;
