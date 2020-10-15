import { IndexIncidentsUseCase } from "./IndexIncidentsUseCase";
import { Request, Response } from "express";

export class IndexIncidentsController {
    constructor(
        private indexIncidentsUseCase: IndexIncidentsUseCase,
    ) { };

    async execute(request: Request, response: Response): Promise<Response> {

        try {
            const incidents = await this.indexIncidentsUseCase.execute();

            return response.status(200).send(incidents);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.',
            });
        };
    };
}