import { IncidentsRepository } from "../../../repositories/Incidents/IncidentsRepository";
import { CreateIncidentDTO } from "./CreateIncidentDTO";
import { Incident } from "../../../entities/Incident";
import { UsersRepository } from "../../../repositories/Users/UsersRepository";

export class CreateIncidentUseCase {
  constructor(
    private incidentsRepository: IncidentsRepository,
    private usersRepository: UsersRepository
  ) {}

  async execute(data: CreateIncidentDTO) {
    const userExists = await this.usersRepository.findById(data.user_id);

    if (!userExists) {
      throw new Error("User not exists.");
    }

    const incident = new Incident(data);

    await this.incidentsRepository.save(incident);
  }
}
