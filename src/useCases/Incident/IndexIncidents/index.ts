import { SQLiteConnectionImp } from "../../../database/DBConnectionImp";
import { IncidentsRepositoryImp } from "../../../repositories/Incidents/IncidentsRepositoryImp";
import { IndexIncidentsUseCase } from "./IndexIncidentsUseCase";
import { IndexIncidentsController } from "./IndexIncidentsController";

const dbConnectionImp = new SQLiteConnectionImp;
const incidentsRepositoryImp = new IncidentsRepositoryImp(dbConnectionImp);
const indexIncidentsUseCase = new IndexIncidentsUseCase(incidentsRepositoryImp);
const indexIncidentsController = new IndexIncidentsController(indexIncidentsUseCase);

export { indexIncidentsController, indexIncidentsUseCase };