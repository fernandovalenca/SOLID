import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("incidents", (table) => {
    table.string("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("reward").notNullable();
    table.string("latitude").notNullable();
    table.string("longitude").notNullable();
    table.string("user_id").notNullable().references("id").inTable("users");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("incidents");
}
