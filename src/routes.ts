import { Router } from "express";
import { createUserController } from "./useCases/User/CreateUser";
import { createIncidentController } from "./useCases/Incident/CreateIncident";
import { indexIncidentsController } from "./useCases/Incident/IndexIncidents";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.execute(request, response);
});

router.get("/incidents", (request, response) => {
  return indexIncidentsController.execute(request, response);
});

router.post("/incidents", (request, response) => {
  return createIncidentController.execute(request, response);
});

export { router };
