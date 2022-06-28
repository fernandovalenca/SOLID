import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { UsersRepositoryImp } from "../../../repositories/Users/UsersRepositoryImp";
import { SQLiteConnectionImp } from "../../../database/DBConnectionImp";

const dbConnectionImp = new SQLiteConnectionImp();
const usersRepositoryImp = new UsersRepositoryImp(dbConnectionImp);
const createUserUseCase = new CreateUserUseCase(usersRepositoryImp);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
