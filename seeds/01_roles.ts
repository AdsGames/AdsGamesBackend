import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("Roles")
    .del()
    .then(() => {
      return knex("Roles").insert([
        { id: "5c6216d9-a8a9-4302-8467-cddfbf6df787", shortName: "admin", name: "Administrator" },
        { id: "a6197a39-8222-4493-9052-83df8b1d37d5", shortName: "moderator", name: "Moderator" },
        { id: "54e24760-7f71-410a-85fb-75aaab4a9613", shortName: "user", name: "User" },
        { id: "0bd63b65-4f86-4c58-9b31-60dc99579870", shortName: "restricted", name: "Restricted" },
      ]);
    });
}
