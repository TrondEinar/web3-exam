import { FC, createContext, useState, useEffect } from "react";
import { IAthlete } from "../interfaces/IAthlete";
import { athleteService } from "../services/athleteService";
import { AthleteContextType } from "../types/AthleteContextType";


export const AthleteContext = createContext<AthleteContextType | null>(null);
export const AthleteProvider: FC = ({children}) => {

    const [athletes, setAthletes] = useState<IAthlete[]>([]);

    useEffect( () => {
        getAthletes();
    }, [])

    const getAthletes = async () => {
        const result = await athleteService.getAllAthletes();
        setAthletes(result)
    }

    return (
        <AthleteContext.Provider value={ { athletes }}>
            {children}
        </AthleteContext.Provider>
    )
}