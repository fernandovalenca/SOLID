import { UsersRepository } from "../../../repositories/Users/UsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";
import { User } from "../../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: CreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
