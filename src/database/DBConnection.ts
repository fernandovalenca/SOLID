import knex from "knex";

export interface DBConnection {
  connection: knex;
}
