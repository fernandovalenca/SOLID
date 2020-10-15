import { UsersRepository } from "./UsersRepository";
import { User } from "../../entities/User";
import { DBConnection } from "../../database/DBConnection";

export class UsersRepositoryImp implements UsersRepository {
    constructor(
        private dbConnection: DBConnection,
    ) { }
    //private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        //const user = this.users.find(user => user.email === email);
        const user = await this.dbConnection.connection('users').where('email', email).first();
        return user;
    };

    async findById(id: string): Promise<User> {
        //const user = this.users.find(user => user.id === id)
        const user = await this.dbConnection.connection('users').where('id', id).first();
        return user;
    }

    async save(user: User): Promise<void> {
        //this.users.push(user);
        try {
            const trx = await this.dbConnection.connection.transaction();
            await trx('users').insert(user);
            await trx.commit();
        } catch (err) {
            console.log(err);
        }
    };
};