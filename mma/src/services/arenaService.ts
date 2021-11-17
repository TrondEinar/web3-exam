import axios from "axios";
import { IAthlete } from "../interfaces/IAthlete";

export const arenaService = (function () {
  const UrlToArenaController = "https://localhost:5001/MmaAthlete";

  const getAllArena = async () => {
    const result = await axios.get(UrlToArenaController);
    return result.data as IAthlete[];
  };

  return {
    getAllArena,
  };
})();
