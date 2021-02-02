import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("featured_game")
    .del()
    .then(() => {
      return knex("featured_game").insert([
        { game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630", place: 0 },
        { game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93", place: 1 },
        { game_id: "da53d10c-3864-4189-bb87-4908ab5aad9b", place: 2 },
        { game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5", place: 3 },
        { game_id: "2dd6e7fc-d679-4f36-9592-64d4342a9611", place: 4 },
      ]);
    });
}
