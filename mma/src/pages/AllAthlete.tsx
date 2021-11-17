import { FC } from "react";
import AthleteList from "../components/athlete/AthleteList";
import AthleteInfoList from "../components/athlete/AthleteInfoList";

const AllAthlete: FC = () => {
  return (
    <section>
      <h3>Alle MMA utøvere</h3>
      <AthleteList />
      <AthleteInfoList />
    </section>
  );
};

export default AllAthlete;
