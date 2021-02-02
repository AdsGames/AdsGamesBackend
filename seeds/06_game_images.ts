import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("game_image")
    .del()
    .then(() => {
      return knex("game_image").insert([
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          url: "https://adsgames-images.s3.amazonaws.com/large/colourart.jpg",
          type: "large",
        },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          url: "https://adsgames-images.s3.amazonaws.com/wide/colourart.jpg",
          type: "wide",
        },
        {
          game_id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/colourart.jpg",
          type: "thumbnail",
        },

        {
          game_id: "ba2e031b-2637-4f9b-b2e6-c5837cee3853",
          url: "https://adsgames-images.s3.amazonaws.com/large/highflier.jpg",
          type: "large",
        },
        {
          game_id: "ba2e031b-2637-4f9b-b2e6-c5837cee3853",
          url: "https://adsgames-images.s3.amazonaws.com/wide/highflier.jpg",
          type: "wide",
        },
        {
          game_id: "ba2e031b-2637-4f9b-b2e6-c5837cee3853",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/highflier.jpg",
          type: "thumbnail",
        },

        {
          game_id: "28aeb585-e062-452e-b584-5ca3154646ce",
          url: "https://adsgames-images.s3.amazonaws.com/large/laneswitcher.jpg",
          type: "large",
        },
        {
          game_id: "28aeb585-e062-452e-b584-5ca3154646ce",
          url: "https://adsgames-images.s3.amazonaws.com/wide/laneswitcher.jpg",
          type: "wide",
        },
        {
          game_id: "28aeb585-e062-452e-b584-5ca3154646ce",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/laneswitcher.jpg",
          type: "thumbnail",
        },

        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          url: "https://adsgames-images.s3.amazonaws.com/large/minigolf.jpg",
          type: "large",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          url: "https://adsgames-images.s3.amazonaws.com/wide/minigolf.jpg",
          type: "wide",
        },
        {
          game_id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/minigolf.jpg",
          type: "thumbnail",
        },

        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://adsgames-images.s3.amazonaws.com/large/breaker.jpg",
          type: "large",
        },
        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://adsgames-images.s3.amazonaws.com/wide/breaker.jpg",
          type: "wide",
        },
        {
          game_id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/breaker.jpg",
          type: "thumbnail",
        },

        {
          game_id: "2dd6e7fc-d679-4f36-9592-64d4342a9611",
          url: "https://adsgames-images.s3.amazonaws.com/large/caveexplorer.jpg",
          type: "large",
        },
        {
          game_id: "2dd6e7fc-d679-4f36-9592-64d4342a9611",
          url: "https://adsgames-images.s3.amazonaws.com/wide/caveexplorer.jpg",
          type: "wide",
        },
        {
          game_id: "2dd6e7fc-d679-4f36-9592-64d4342a9611",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/caveexplorer.jpg",
          type: "thumbnail",
        },

        {
          game_id: "f4f825d5-721a-4b89-b9e3-a19976285943",
          url: "https://adsgames-images.s3.amazonaws.com/large/marblemaze.jpg",
          type: "large",
        },
        {
          game_id: "f4f825d5-721a-4b89-b9e3-a19976285943",
          url: "https://adsgames-images.s3.amazonaws.com/wide/marblemaze.jpg",
          type: "wide",
        },
        {
          game_id: "f4f825d5-721a-4b89-b9e3-a19976285943",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/marblemaze.jpg",
          type: "thumbnail",
        },

        {
          game_id: "fb74ba5d-fedd-42f9-8161-f5f627cb4b67",
          url: "https://adsgames-images.s3.amazonaws.com/large/mazes.jpg",
          type: "large",
        },
        {
          game_id: "fb74ba5d-fedd-42f9-8161-f5f627cb4b67",
          url: "https://adsgames-images.s3.amazonaws.com/wide/mazes.jpg",
          type: "wide",
        },
        {
          game_id: "fb74ba5d-fedd-42f9-8161-f5f627cb4b67",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/mazes.jpg",
          type: "thumbnail",
        },

        {
          game_id: "6520b3e3-2e66-445f-aac9-52525d3424ff",
          url: "https://adsgames-images.s3.amazonaws.com/large/memory.jpg",
          type: "large",
        },
        {
          game_id: "6520b3e3-2e66-445f-aac9-52525d3424ff",
          url: "https://adsgames-images.s3.amazonaws.com/wide/memory.jpg",
          type: "wide",
        },
        {
          game_id: "6520b3e3-2e66-445f-aac9-52525d3424ff",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/memory.jpg",
          type: "thumbnail",
        },

        {
          game_id: "86c16c60-0e29-431b-8f93-e2c1ce207d87",
          url: "https://adsgames-images.s3.amazonaws.com/large/minersbay.jpg",
          type: "large",
        },
        {
          game_id: "86c16c60-0e29-431b-8f93-e2c1ce207d87",
          url: "https://adsgames-images.s3.amazonaws.com/wide/minersbay.jpg",
          type: "wide",
        },
        {
          game_id: "86c16c60-0e29-431b-8f93-e2c1ce207d87",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/minersbay.jpg",
          type: "thumbnail",
        },

        {
          game_id: "c2244f84-4b7e-472d-805b-a1bdc3331acc",
          url: "https://adsgames-images.s3.amazonaws.com/large/minesweeper.jpg",
          type: "large",
        },
        {
          game_id: "c2244f84-4b7e-472d-805b-a1bdc3331acc",
          url: "https://adsgames-images.s3.amazonaws.com/wide/minesweeper.jpg",
          type: "wide",
        },
        {
          game_id: "c2244f84-4b7e-472d-805b-a1bdc3331acc",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/minesweeper.jpg",
          type: "thumbnail",
        },

        {
          game_id: "354d2750-1073-4c96-9540-39fd7d9d8a38",
          url: "https://adsgames-images.s3.amazonaws.com/large/mordor.jpg",
          type: "large",
        },
        {
          game_id: "354d2750-1073-4c96-9540-39fd7d9d8a38",
          url: "https://adsgames-images.s3.amazonaws.com/wide/mordor.jpg",
          type: "wide",
        },
        {
          game_id: "354d2750-1073-4c96-9540-39fd7d9d8a38",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/mordor.jpg",
          type: "thumbnail",
        },

        {
          game_id: "9db42e22-0ea1-4307-9d83-f4af61a98bca",
          url: "https://adsgames-images.s3.amazonaws.com/large/platforms.jpg",
          type: "large",
        },
        {
          game_id: "9db42e22-0ea1-4307-9d83-f4af61a98bca",
          url: "https://adsgames-images.s3.amazonaws.com/wide/platforms.jpg",
          type: "wide",
        },
        {
          game_id: "9db42e22-0ea1-4307-9d83-f4af61a98bca",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/platforms.jpg",
          type: "thumbnail",
        },

        {
          game_id: "aed624cf-5eea-4b09-86a6-e700de3cb859",
          url: "https://adsgames-images.s3.amazonaws.com/large/robotflier.jpg",
          type: "large",
        },
        {
          game_id: "aed624cf-5eea-4b09-86a6-e700de3cb859",
          url: "https://adsgames-images.s3.amazonaws.com/wide/robotflier.jpg",
          type: "wide",
        },
        {
          game_id: "aed624cf-5eea-4b09-86a6-e700de3cb859",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/robotflier.jpg",
          type: "thumbnail",
        },

        {
          game_id: "2385e949-6f9f-40d6-a0d4-4c71a1a6034a",
          url: "https://adsgames-images.s3.amazonaws.com/large/rockpaperscissors.jpg",
          type: "large",
        },
        {
          game_id: "2385e949-6f9f-40d6-a0d4-4c71a1a6034a",
          url: "https://adsgames-images.s3.amazonaws.com/wide/rockpaperscissors.jpg",
          type: "wide",
        },
        {
          game_id: "2385e949-6f9f-40d6-a0d4-4c71a1a6034a",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/rockpaperscissors.jpg",
          type: "thumbnail",
        },

        {
          game_id: "d7547d8c-8da4-4282-b2e9-860463b77e52",
          url: "https://adsgames-images.s3.amazonaws.com/large/slimeknight.jpg",
          type: "large",
        },
        {
          game_id: "d7547d8c-8da4-4282-b2e9-860463b77e52",
          url: "https://adsgames-images.s3.amazonaws.com/wide/slimeknight.jpg",
          type: "wide",
        },
        {
          game_id: "d7547d8c-8da4-4282-b2e9-860463b77e52",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/slimeknight.jpg",
          type: "thumbnail",
        },

        {
          game_id: "ce65e834-307f-471c-8293-6c9a30d4dc48",
          url: "https://adsgames-images.s3.amazonaws.com/large/tictactoe.jpg",
          type: "large",
        },
        {
          game_id: "ce65e834-307f-471c-8293-6c9a30d4dc48",
          url: "https://adsgames-images.s3.amazonaws.com/wide/tictactoe.jpg",
          type: "wide",
        },
        {
          game_id: "ce65e834-307f-471c-8293-6c9a30d4dc48",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/tictactoe.jpg",
          type: "thumbnail",
        },

        {
          game_id: "bc56a6fc-56f5-4b00-b9e2-0119d5c2a433",
          url: "https://adsgames-images.s3.amazonaws.com/large/spacefighter.jpg",
          type: "large",
        },
        {
          game_id: "bc56a6fc-56f5-4b00-b9e2-0119d5c2a433",
          url: "https://adsgames-images.s3.amazonaws.com/wide/spacefighter.jpg",
          type: "wide",
        },
        {
          game_id: "bc56a6fc-56f5-4b00-b9e2-0119d5c2a433",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/spacefighter.jpg",
          type: "thumbnail",
        },

        {
          game_id: "6e03d116-5eab-44e7-b048-1bf4d2f67d09",
          url: "https://adsgames-images.s3.amazonaws.com/large/jimfarm.jpg",
          type: "large",
        },
        {
          game_id: "6e03d116-5eab-44e7-b048-1bf4d2f67d09",
          url: "https://adsgames-images.s3.amazonaws.com/wide/jimfarm.jpg",
          type: "wide",
        },
        {
          game_id: "6e03d116-5eab-44e7-b048-1bf4d2f67d09",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/jimfarm.jpg",
          type: "thumbnail",
        },

        {
          game_id: "ee66bb3b-c387-4057-b9b1-24b9f934b39d",
          url: "https://adsgames-images.s3.amazonaws.com/large/jimsalienadventure.jpg",
          type: "large",
        },
        {
          game_id: "ee66bb3b-c387-4057-b9b1-24b9f934b39d",
          url: "https://adsgames-images.s3.amazonaws.com/wide/jimsalienadventure.jpg",
          type: "wide",
        },
        {
          game_id: "ee66bb3b-c387-4057-b9b1-24b9f934b39d",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/jimsalienadventure.jpg",
          type: "thumbnail",
        },

        {
          game_id: "be32c2f6-1a1e-4790-9e08-b80fff678f53",
          url: "https://adsgames-images.s3.amazonaws.com/large/jedclicker.jpg",
          type: "large",
        },
        {
          game_id: "be32c2f6-1a1e-4790-9e08-b80fff678f53",
          url: "https://adsgames-images.s3.amazonaws.com/wide/jedclicker.jpg",
          type: "wide",
        },
        {
          game_id: "be32c2f6-1a1e-4790-9e08-b80fff678f53",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/jedclicker.jpg",
          type: "thumbnail",
        },

        {
          game_id: "9a816edb-e3fe-4947-a909-9d76a86cd79f",
          url: "https://adsgames-images.s3.amazonaws.com/large/jedclickerjs.jpg",
          type: "large",
        },
        {
          game_id: "9a816edb-e3fe-4947-a909-9d76a86cd79f",
          url: "https://adsgames-images.s3.amazonaws.com/wide/jedclickerjs.jpg",
          type: "wide",
        },
        {
          game_id: "9a816edb-e3fe-4947-a909-9d76a86cd79f",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/jedclickerjs.jpg",
          type: "thumbnail",
        },

        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          url: "https://adsgames-images.s3.amazonaws.com/large/superarcherman.jpg",
          type: "large",
        },
        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          url: "https://adsgames-images.s3.amazonaws.com/wide/superarcherman.jpg",
          type: "wide",
        },
        {
          game_id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/superarcherman.jpg",
          type: "thumbnail",
        },

        {
          game_id: "da53d10c-3864-4189-bb87-4908ab5aad9b",
          url: "https://adsgames-images.s3.amazonaws.com/large/deepspace.jpg",
          type: "large",
        },
        {
          game_id: "da53d10c-3864-4189-bb87-4908ab5aad9b",
          url: "https://adsgames-images.s3.amazonaws.com/wide/deepspace.jpg",
          type: "wide",
        },
        {
          game_id: "da53d10c-3864-4189-bb87-4908ab5aad9b",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/deepspace.jpg",
          type: "thumbnail",
        },

        {
          game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          url: "https://adsgames-images.s3.amazonaws.com/large/pong.jpg",
          type: "large",
        },
        {
          game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          url: "https://adsgames-images.s3.amazonaws.com/wide/pong.jpg",
          type: "wide",
        },
        {
          game_id: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/pong.jpg",
          type: "thumbnail",
        },

        {
          game_id: "764a88db-139d-4e52-84f4-f14401f50433",
          url: "https://adsgames-images.s3.amazonaws.com/large/jumpingjimothy.jpg",
          type: "large",
        },
        {
          game_id: "764a88db-139d-4e52-84f4-f14401f50433",
          url: "https://adsgames-images.s3.amazonaws.com/wide/jumpingjimothy.jpg",
          type: "wide",
        },
        {
          game_id: "764a88db-139d-4e52-84f4-f14401f50433",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/jumpingjimothy.jpg",
          type: "thumbnail",
        },

        {
          game_id: "14c1634f-bb7b-4e0b-a764-8a7636025c61",
          url: "https://adsgames-images.s3.amazonaws.com/large/brickbreaker.jpg",
          type: "large",
        },
        {
          game_id: "14c1634f-bb7b-4e0b-a764-8a7636025c61",
          url: "https://adsgames-images.s3.amazonaws.com/wide/brickbreaker.jpg",
          type: "wide",
        },
        {
          game_id: "14c1634f-bb7b-4e0b-a764-8a7636025c61",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/brickbreaker.jpg",
          type: "thumbnail",
        },

        {
          game_id: "921ac0b2-b921-4dc4-a58a-e7c8f9f7fcff",
          url: "https://adsgames-images.s3.amazonaws.com/large/solitaire.jpg",
          type: "large",
        },
        {
          game_id: "921ac0b2-b921-4dc4-a58a-e7c8f9f7fcff",
          url: "https://adsgames-images.s3.amazonaws.com/wide/solitaire.jpg",
          type: "wide",
        },
        {
          game_id: "921ac0b2-b921-4dc4-a58a-e7c8f9f7fcff",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/solitaire.jpg",
          type: "thumbnail",
        },

        {
          game_id: "03d9293f-082b-451f-90e4-b3009452d447",
          url: "https://adsgames-images.s3.amazonaws.com/large/gameoflife.jpg",
          type: "large",
        },
        {
          game_id: "03d9293f-082b-451f-90e4-b3009452d447",
          url: "https://adsgames-images.s3.amazonaws.com/wide/gameoflife.jpg",
          type: "wide",
        },
        {
          game_id: "03d9293f-082b-451f-90e4-b3009452d447",
          url: "https://adsgames-images.s3.amazonaws.com/thumbnail/gameoflife.jpg",
          type: "thumbnail",
        },
      ]);
    });
}
