import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const { name, email, password, whatsapp } = request.body;

    try {
      await this.createUserUseCase.execute({ name, email, password, whatsapp });
      return response.status(201).send();
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || "Unexpected error." });
    }
  }
}
