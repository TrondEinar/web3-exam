import { FC } from "react";
import { IAthlete } from "../../interfaces/IAthlete";

const AthleteItem: FC<IAthlete> = ({ id, name, image }) => {
  return (
    <article>
      <h3>
        {name} {id}
      </h3>
      <img src={`https://localhost:5001/images/${image}`} alt={name} />
    </article>
  );
};

export default AthleteItem;
