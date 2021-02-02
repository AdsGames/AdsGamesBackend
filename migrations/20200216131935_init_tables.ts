import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema

    .createTable("game", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("short_name").notNullable();
      table.string("name").notNullable();
      table.string("description", 1024).notNullable();
      table.boolean("visible").notNullable();
    })

    .createTable("control", (table) => {
      table.string("game_id").notNullable();
      table.foreign("game_id").references("id").inTable("game");
      table.string("type").notNullable();
      table.string("description").notNullable();
    })

    .createTable("role", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("name").notNullable();
      table.string("short_name").notNullable();
    })

    .createTable("user", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("username").notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("role_id").notNullable();
      table.foreign("role_id").references("id").inTable("role");
      table.string("avatar");
      table.string("about", 1024);
      table.string("website");
      table.string("location");
    })

    .createTable("featured_game", (table) => {
      table.integer("place").primary().notNullable();
      table.string("game_id").notNullable();
      table.foreign("game_id").references("id").inTable("game");
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("featured_game").dropTable("user").dropTable("role").dropTable("control").dropTable("game");
}
