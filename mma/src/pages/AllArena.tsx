import { FC } from "react";
import ArenaList from "../components/arena/ArenaList";

const AllAthlete: FC = () => {
  return (
    <section>
      <h3>Alle Arenaer</h3>
      <ArenaList />
    </section>
  );
};

export default AllAthlete;
