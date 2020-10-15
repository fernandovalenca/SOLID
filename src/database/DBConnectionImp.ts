import { DBConnection } from "./DBConnection";
import knex from 'knex';
import path from 'path';

export class SQLiteConnectionImp implements DBConnection {
    connection = knex({
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'database.sqlite'),
        },
        pool: {
            max: 50,
            min: 2,
        },
        useNullAsDefault: true,
    });
};