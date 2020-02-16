import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTable("game_types", table => {
      table
        .string("id", 36)
        .primary()
        .notNullable();
      table.string("name").notNullable();
      table.string("description").notNullable();
    })

    .createTable("control_types", table => {
      table
        .string("id", 36)
        .primary()
        .notNullable();
      table.string("short_name").notNullable();
      table.string("name").notNullable();
      table.string("image").notNullable();
    })

    .createTable("games", table => {
      table
        .string("id", 36)
        .primary()
        .notNullable();
      table.string("short_name").notNullable();
      table.string("name").notNullable();
      table.string("description", 1024).notNullable();
      table.string("type_id").notNullable();
      table
        .foreign("type_id")
        .references("id")
        .inTable("game_types");
      table.string("source");
      table.string("file");
      table.integer("width");
      table.integer("height");
      table.string("version").notNullable();
      table.boolean("visible").notNullable();
      table.integer("controller");
    })

    .createTable("controls", table => {
      table.string("game_id").notNullable();
      table
        .foreign("game_id")
        .references("id")
        .inTable("games");
      table.string("control_id").notNullable();
      table
        .foreign("control_id")
        .references("id")
        .inTable("control_types");
      table.string("description").notNullable();
    })

    .createTable("roles", table => {
      table
        .string("id", 36)
        .primary()
        .notNullable();
      table.string("name").notNullable();
      table.string("short_name").notNullable();
    })

    .createTable("users", table => {
      table
        .string("id", 36)
        .primary()
        .notNullable();
      table.string("username").notNullable();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("role_id").notNullable();
      table
        .foreign("role_id")
        .references("id")
        .inTable("roles");
      table.string("avatar");
      table.string("about", 1024);
      table.string("website");
      table.string("location");
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema
    .dropTable("users")
    .dropTable("roles")
    .dropTable("controls")
    .dropTable("games")
    .dropTable("control_types")
    .dropTable("game_types");
}
