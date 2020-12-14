import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("FeaturedGames")
    .del()
    .then(() => {
      return knex("FeaturedGames").insert([
        { gameId: "059a1935-8950-4bb1-9acd-9e27e79741c4", place: 0 },
        { gameId: "7ed5c0c0-396f-4222-80cc-30233e5edb93", place: 1 },
        { gameId: "da53d10c-3864-4189-bb87-4908ab5aad9b", place: 2 },
        { gameId: "5bd9d63e-fadd-4cae-918f-461396775cb5", place: 3 },
        { gameId: "2dd6e7fc-d679-4f36-9592-64d4342a9611", place: 4 },
      ]);
    });
}
