import { Incident } from "../../entities/Incident";

export interface IncidentsRepository {
    index(): Promise<Incident[]>;
    save(incident: Incident): Promise<void>;
};