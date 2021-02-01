import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("game_file")
    .del()
    .then(() => {
      return knex("game_file").insert([
        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          url: "https://adsgames-game-data.s3.amazonaws.com/games/superarcherman/index.html",
          type: "embed",
        },
        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://adsgames-game-data.s3.amazonaws.com/downloads/breaker/breaker-v1.3.2.zip",
          type: "download",
        },
      ]);
    });
}
