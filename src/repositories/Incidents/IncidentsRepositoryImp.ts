import { IncidentsRepository } from "./IncidentsRepository";
import { Incident } from "../../entities/Incident";
import { DBConnection } from "../../database/DBConnection";

export class IncidentsRepositoryImp implements IncidentsRepository {
    constructor(
        private dbConnection: DBConnection,
    ) { };
    async index(): Promise<Incident[]> {
        const incidents = await this.dbConnection.connection('incidents').select('*');
        return incidents;
    };
    async save(incident: Incident): Promise<void> {
        try {
            const trx = await this.dbConnection.connection.transaction();
            await trx('incidents').insert(incident);
            await trx.commit();
        } catch (err) {
            console.log(err);
        };
    };
};