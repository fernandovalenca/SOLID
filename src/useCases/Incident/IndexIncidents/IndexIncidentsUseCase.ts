import { IncidentsRepository } from "../../../repositories/Incidents/IncidentsRepository";

export class IndexIncidentsUseCase {
  constructor(private incidentRepository: IncidentsRepository) {}
  async execute() {
    const incidents = await this.incidentRepository.index();
    return incidents;
  }
}
