import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("game_file")
    .del()
    .then(() => {
      return knex("game_file").insert([
        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          url: "https://adsgames-game-data.s3.amazonaws.com/games/superarcherman/index.html",
          platform: "web",
        },
        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://adsgames-game-data.s3.amazonaws.com/downloads/breaker/breaker-v1.3.2.zip",
          platform: "windows",
        },
        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://adsgames-game-data.s3.amazonaws.com/downloads/breaker/breaker-v1.3.2.zip",
          platform: "mac",
        },
        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://adsgames-game-data.s3.amazonaws.com/downloads/breaker/breaker-v1.3.2.zip",
          platform: "linux",
        },
        {
          game_id: "28aeb585-e062-452e-b584-5ca3154646ce",
          url: "https://github.com/AdsGames/LaneSwitcher",
          platform: "source",
        },
        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://github.com/AdsGames/Breaker",
          platform: "source",
        },
        {
          game_id: "2dd6e7fc-d679-4f36-9592-64d4342a9611",
          url: "https://github.com/AdsGames/Explorer",
          platform: "source",
        },
        {
          game_id: "f4f825d5-721a-4b89-b9e3-a19976285943",
          url: "https://github.com/AdsGames/MarbleMaze",
          platform: "source",
        },
        {
          game_id: "fb74ba5d-fedd-42f9-8161-f5f627cb4b67",
          url: "https://github.com/AdsGames/Mazes",
          platform: "source",
        },
        {
          game_id: "6520b3e3-2e66-445f-aac9-52525d3424ff",
          url: "https://github.com/AdsGames/Memory",
          platform: "source",
        },
        {
          game_id: "c2244f84-4b7e-472d-805b-a1bdc3331acc",
          url: "https://github.com/AdsGames/MineSweeper",
          platform: "source",
        },
        {
          game_id: "354d2750-1073-4c96-9540-39fd7d9d8a38",
          url: "https://github.com/AdsGames/Mordor",
          platform: "source",
        },
        {
          game_id: "9db42e22-0ea1-4307-9d83-f4af61a98bca",
          url: "https://github.com/AdsGames/Platforms",
          platform: "source",
        },
        {
          game_id: "aed624cf-5eea-4b09-86a6-e700de3cb859",
          url: "https://github.com/AdsGames/RobotFlier",
          platform: "source",
        },
        {
          game_id: "2385e949-6f9f-40d6-a0d4-4c71a1a6034a",
          url: "https://github.com/AdsGames/RockPaperScissors",
          platform: "source",
        },
        {
          game_id: "d7547d8c-8da4-4282-b2e9-860463b77e52",
          url: "https://github.com/AdsGames/SlimeKnight",
          platform: "source",
        },
        {
          game_id: "ce65e834-307f-471c-8293-6c9a30d4dc48",
          url: "https://github.com/AdsGames/TicTacToe",
          platform: "source",
        },
        {
          game_id: "6e03d116-5eab-44e7-b048-1bf4d2f67d09",
          url: "https://github.com/AdsGames/JimFarm",
          platform: "source",
        },
        {
          game_id: "ee66bb3b-c387-4057-b9b1-24b9f934b39d",
          url: "https://github.com/AdsGames/JimsAlienAdventure",
          platform: "source",
        },
        {
          game_id: "be32c2f6-1a1e-4790-9e08-b80fff678f53",
          url: "https://github.com/AdsGames/TapGameForJed",
          platform: "source",
        },
        {
          game_id: "9a816edb-e3fe-4947-a909-9d76a86cd79f",
          url: "http://github.com/danwardvs/JedClickerJS2",
          platform: "source",
        },
        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          url: "http://github.com/alegemaate/SuperArcherMan",
          platform: "source",
        },
        {
          game_id: "da53d10c-3864-4189-bb87-4908ab5aad9b",
          url: "https://github.com/AdsGames/SpaceDoomJS",
          platform: "source",
        },
        {
          game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          url: "https://github.com/AdsGames/PongJS",
          platform: "source",
        },
        {
          game_id: "764a88db-139d-4e52-84f4-f14401f50433",
          url: "https://gitlab.com/danwardvs/JumpingJimothy",
          platform: "source",
        },
        {
          game_id: "14c1634f-bb7b-4e0b-a764-8a7636025c61",
          url: "https://github.com/AdsGames/BrickBreakerJS",
          platform: "source",
        },
        {
          game_id: "921ac0b2-b921-4dc4-a58a-e7c8f9f7fcff",
          url: "https://github.com/alegemaate/SolitaireJS",
          platform: "source",
        },
        {
          game_id: "03d9293f-082b-451f-90e4-b3009452d447",
          url: "https://github.com/alegemaate/GameOfLifeJS/",
          platform: "source",
        },
      ]);
    });
}
