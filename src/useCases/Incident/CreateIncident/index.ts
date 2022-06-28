import { IncidentsRepositoryImp } from "../../../repositories/Incidents/IncidentsRepositoryImp";
import { UsersRepositoryImp } from "../../../repositories/Users/UsersRepositoryImp";
import { CreateIncidentUseCase } from "./CreateIncidentUseCase";
import { CreateIncidentController } from "./CreateIncidentController";
import { SQLiteConnectionImp } from "../../../database/DBConnectionImp";

const dbConnectionImp = new SQLiteConnectionImp();
const incidentsRepositoryImp = new IncidentsRepositoryImp(dbConnectionImp);
const usersRepositoryImp = new UsersRepositoryImp(dbConnectionImp);
const createIncidentUseCase = new CreateIncidentUseCase(
  incidentsRepositoryImp,
  usersRepositoryImp
);
const createIncidentController = new CreateIncidentController(
  createIncidentUseCase
);

export { createIncidentUseCase, createIncidentController };
