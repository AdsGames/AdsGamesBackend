import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable("GameTypes", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("name").notNullable();
      table.string("description").notNullable();
    })

    .createTable("ControlTypes", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("shortName").notNullable();
      table.string("name").notNullable();
      table.string("image").notNullable();
    })

    .createTable("Games", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("shortName").notNullable();
      table.string("name").notNullable();
      table.string("description", 1024).notNullable();
      table.string("typeId").notNullable();
      table.foreign("typeId").references("id").inTable("GameTypes");
      table.string("source");
      table.string("file");
      table.integer("width");
      table.integer("height");
      table.string("version").notNullable();
      table.boolean("visible").notNullable();
      table.integer("controller");
    })

    .createTable("Controls", (table) => {
      table.string("gameId").notNullable();
      table.foreign("gameId").references("id").inTable("Games");
      table.string("controlId").notNullable();
      table.foreign("controlId").references("id").inTable("ControlTypes");
      table.string("description").notNullable();
    })

    .createTable("Roles", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("name").notNullable();
      table.string("shortName").notNullable();
    })

    .createTable("Users", (table) => {
      table.string("id", 36).primary().notNullable();
      table.string("username").notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("roleId").notNullable();
      table.foreign("roleId").references("id").inTable("Roles");
      table.string("avatar");
      table.string("about", 1024);
      table.string("website");
      table.string("location");
    })

    .createTable("FeaturedGames", (table) => {
      table.integer("place").primary().notNullable();
      table.string("gameId").notNullable();
      table.foreign("gameId").references("id").inTable("Games");
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .dropTable("FeaturedGames")
    .dropTable("Users")
    .dropTable("Roles")
    .dropTable("Controls")
    .dropTable("Games")
    .dropTable("ControlTypes")
    .dropTable("GameTypes");
}
