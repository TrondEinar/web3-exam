import { FC } from "react";
import AthleteList from "../components/athlete/AthleteList";
import { AthleteProvider } from "../contexts/AthleteContext";

const AllAthlete: FC = () => {
  return (
    <section>
      <h3>Alle MMA utøvere</h3>
      <AthleteProvider>
        <AthleteList />
      </AthleteProvider>
    </section>
  );
};

export default AllAthlete;
