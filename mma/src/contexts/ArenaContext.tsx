import { FC, createContext, useState, useEffect } from "react";
import { IAthlete } from "../interfaces/IAthlete";
import { arenaService } from "../services/arenaService";
import { ArenaContextType } from "../types/ArenaContextType";


export const ArenaContext = createContext<ArenaContextType | null>(null);
export const ArenaProvider: FC = ({children}) => {

  const [arena, setArena] = useState<IAthlete[]>([]);

    useEffect( () => {
        getArena();
    }, [])

    const getArena = async () => {
        const result = await arenaService.getAllArena();
        setArena(result)
    }

    return (
        <ArenaContext.Provider value={ { arena }}>
            {children}
        </ArenaContext.Provider>
    )
}