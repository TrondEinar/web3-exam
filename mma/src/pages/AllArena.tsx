import { FC } from "react";
import ArenaList from "../components/arena/ArenaList";
import { ArenaProvider } from "../contexts/ArenaContext";

const AllArena: FC = () => {
  return (
    <section>
      <h3>Alle Arenaer</h3>
      <ArenaProvider>
        <ArenaList />
      </ArenaProvider>
    </section>
  );
};

export default AllArena;
