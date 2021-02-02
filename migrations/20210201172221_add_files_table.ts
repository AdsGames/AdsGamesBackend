import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("game_file", (table) => {
    table.string("game_id").notNullable();
    table.foreign("game_id").references("id").inTable("game");
    table.string("url").notNullable();
    table.enu("platform", ["windows", "mac", "linux", "web", "source"]).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("game_file");
}
