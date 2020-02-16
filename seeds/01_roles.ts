import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("roles")
    .del()
    .then(() => {
      return knex("roles").insert([
        { id: "5c6216d9-a8a9-4302-8467-cddfbf6df787", short_name: "admin", name: "Administrator" },
        { id: "a6197a39-8222-4493-9052-83df8b1d37d5", short_name: "moderator", name: "Moderator" },
        { id: "54e24760-7f71-410a-85fb-75aaab4a9613", short_name: "user", name: "User" },
        { id: "0bd63b65-4f86-4c58-9b31-60dc99579870", short_name: "restricted", name: "Restricted" },
      ]);
    });
}
