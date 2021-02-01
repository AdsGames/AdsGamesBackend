import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("game_file", (table) => {
    table.string("game_id").notNullable();
    table.foreign("game_id").references("id").inTable("game");
    table.enu("type", ["embed", "download"]).notNullable();
    table.string("url").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("game_file");
}
