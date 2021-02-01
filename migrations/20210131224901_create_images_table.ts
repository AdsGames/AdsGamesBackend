import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("game_image", (table) => {
    table.string("game_id").notNullable();
    table.foreign("game_id").references("id").inTable("game");
    table.enu("type", ["thumbnail", "large", "wide"]).notNullable();
    table.string("url").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("game_image");
}
