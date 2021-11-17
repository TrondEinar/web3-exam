import { FC } from "react";
import AthleteInfoList from "../components/athlete/AthleteInfoList";

const OneAthlete: FC = () => {
  return (
    <section>
      <h3>Detaljside for utøvere!</h3>
      <AthleteInfoList />
    </section>
  );
};

export default OneAthlete;
