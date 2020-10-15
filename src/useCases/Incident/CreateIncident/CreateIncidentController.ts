import { CreateIncidentUseCase } from "./CreateIncidentUseCase";
import { Request, Response } from "express";

export class CreateIncidentController {
    constructor(
        private createIncidentUseCase: CreateIncidentUseCase,
    ) { };

    async execute(request: Request, response: Response): Promise<Response> {
        const { title, description, reward, latitude, longitude } = request.body;
        const user_id: string = request.headers.authorization;

        try {
            await this.createIncidentUseCase.execute({ title, description, reward, latitude, longitude, user_id });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.',
            });
        };
    };
};