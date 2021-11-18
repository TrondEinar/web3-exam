import { FC } from "react";
import ArenaList from "../components/arena/ArenaList";

const AllArena: FC = () => {
  return (
    <section>
      <h3>Alle Arenaer</h3>
      <ArenaList />
    </section>
  );
};

export default AllArena;
