import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        { id: 1, name: "Test User" },
        { id: 2, name: "Test 2" },
        { id: 3, name: "Test 3" },
      ]);
    });
}
