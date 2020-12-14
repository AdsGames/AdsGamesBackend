import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("Games")
    .del()
    .then(() => {
      return knex("Games").insert([
        {
          id: "059a1935-8950-4bb1-9acd-9e27e79741c4",
          name: "Colour Art",
          shortName: "colourart",
          description: "Bring out your inner creativity! Create colourful designs using the arrow keys.",
          typeId: "9df7c54f-6c74-4647-8b86-09b548d61b07",
          file: "17151758",
          version: "1.0",
          width: 640,
          height: 480,
          visible: false,
          controller: 0,
        },
        {
          id: "ba2e031b-2637-4f9b-b2e6-c5837cee3853",
          name: "High Flier",
          shortName: "highflier",
          description:
            "Fly through the air so that you may get to the landing strip on time. Do not crash into the surrounding scenery or your airplane will be destroyed.",
          typeId: "9df7c54f-6c74-4647-8b86-09b548d61b07",
          file: "19706666",
          version: "1.0",
          width: 640,
          height: 480,
          visible: false,
          controller: 0,
        },
        {
          id: "28aeb585-e062-452e-b584-5ca3154646ce",
          name: "Lane Switcher",
          shortName: "laneswitcher",
          description:
            "On his way to work, Johnny realized he forgot to fill up his gas tank! Pick up gas cans on the road to refill your gas tank avoiding the dangers.",
          typeId: "050533ff-e40e-4056-9526-1f4bb88a04b0",
          file: "laneswitcher.jar",
          version: "1.0",
          source: "https://github.com/AdsGames/LaneSwitcher",
          width: 640,
          height: 480,
          visible: false,
          controller: 0,
        },
        {
          id: "7ed5c0c0-396f-4222-80cc-30233e5edb93",
          name: "Mini Golf",
          shortName: "minigolf",
          description: "A classic game of mini golf. Make sure you meet the par each round so you may advance to the next level.",
          typeId: "9df7c54f-6c74-4647-8b86-09b548d61b07",
          file: "2752342",
          version: "1.0",
          width: 640,
          height: 480,
          visible: false,
          controller: 0,
        },
        {
          id: "f81d51aa-610d-42ea-9cf1-187dd3832630",
          name: "Breaker",
          shortName: "breaker",
          description: "Break all the blocks on the board by matching colours. The faster you clear it the higher your score will be.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "breaker-v1.3.2.zip",
          version: "1.3.2",
          source: "https://github.com/AdsGames/Breaker",
          visible: true,
          controller: 0,
        },
        {
          id: "2dd6e7fc-d679-4f36-9592-64d4342a9611",
          name: "Cave Explorer",
          shortName: "caveexplorer",
          description:
            "Travel through spider infested tunnels and collect treasures. Will you find out what awaits you at the end of the caves?",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "explorer_1.2.zip",
          version: "1.2",
          source: "https://github.com/AdsGames/Explorer",
          visible: false,
          controller: 0,
        },
        {
          id: "f4f825d5-721a-4b89-b9e3-a19976285943",
          name: "Marble Maze",
          shortName: "marblemaze",
          description: "Move your marble around stones and dodge spiders. The more coins collected the higher score you will receive.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Marble_Maze_1.2.1.zip",
          version: "1.2.1",
          source: "https://github.com/AdsGames/MarbleMaze",
          visible: true,
          controller: 1,
        },
        {
          id: "fb74ba5d-fedd-42f9-8161-f5f627cb4b67",
          name: "Mazes",
          shortName: "mazes",
          description:
            "Travel through various mazes and destroy the robots. Push boxes and sweep up debris. This is one puzzle game you do not want to miss.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Mazes_4.0.zip",
          version: "4.0",
          source: "https://github.com/AdsGames/Mazes",
          visible: true,
          controller: 0,
        },
        {
          id: "6520b3e3-2e66-445f-aac9-52525d3424ff",
          name: "Memory",
          shortName: "memory",
          description:
            "Match all the cards on the table in four different difficulties. Compete against yourself and others with the high-score tables.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Memory_1.1.zip",
          version: "1.1",
          source: "https://github.com/AdsGames/Memory",
          visible: true,
          controller: 0,
        },
        {
          id: "86c16c60-0e29-431b-8f93-e2c1ce207d87",
          name: "Miners Bay",
          shortName: "minersbay",
          description:
            "Destroy and place blocks in a huge randomly generated world, find treasures, craft new items and dig to the depths of the earth.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "MinersBay_2.0.zip",
          version: "2.0",
          visible: true,
          controller: 0,
        },
        {
          id: "c2244f84-4b7e-472d-805b-a1bdc3331acc",
          name: "Minesweeper",
          shortName: "minesweeper",
          description:
            "A remake of the classic windows game, Minesweeper. Clear the board of mines by marking each one to ensure that the area is safe.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "minesweeper-v1.7.2.zip",
          version: "1.7.2",
          source: "https://github.com/AdsGames/MineSweeper",
          visible: true,
          controller: 0,
        },
        {
          id: "354d2750-1073-4c96-9540-39fd7d9d8a38",
          name: "Mordor",
          shortName: "mordor",
          description:
            "A Windows GUI based RPG. In this game, you have to travel to different locations around middle earth and smite anyone who dares to defy you. Your final goal is to purchase and equip the godly sword and shield, then you will become the most powerful being in history.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Mordor_1.1.zip",
          version: "1.1",
          source: "https://github.com/AdsGames/Mordor",
          visible: true,
          controller: 0,
        },
        {
          id: "9db42e22-0ea1-4307-9d83-f4af61a98bca",
          name: "Platforms",
          shortName: "platforms",
          description:
            "A great shooter/platformer in which you must travel through many levels to finally defeat the giant bat boss whom allegedly killed your father.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Platforms_1.1.zip",
          version: "1.1",
          source: "https://github.com/AdsGames/Platforms",
          visible: true,
          controller: 0,
        },
        {
          id: "aed624cf-5eea-4b09-86a6-e700de3cb859",
          name: "Robot Flier",
          shortName: "robotflier",
          description:
            "Control a rocket propelled robot through the dangers of space. Travel from the Moon to Mars, the Sun and the mysterious Dark Planet using an advanced teleportation chip.  Collect energy to keep flying and get power ups to help you survive. Will you be able to find your way through all the planets in the unforgiving space?",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "robotflier - v2.7.zip",
          version: "2.7",
          source: "https://github.com/AdsGames/RobotFlier",
          visible: true,
          controller: 0,
        },
        {
          id: "2385e949-6f9f-40d6-a0d4-4c71a1a6034a",
          name: "Rock Paper Scissors",
          shortName: "rockpaperscissors",
          description: "Play a realistic game of rock paper scissors against an AI opponent.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Rock_Paper_Scissors_1.0.zip",
          version: "1.0",
          source: "https://github.com/AdsGames/RockPaperScissors",
          visible: false,
          controller: 0,
        },
        {
          id: "d7547d8c-8da4-4282-b2e9-860463b77e52",
          name: "Slime Knight",
          shortName: "slimeknight",
          description:
            "The entire world has been infested by slimes. The people of Avalor did no know what to do so they summoned the great slime knight from his grave. Your mission is to kill all the slimes and destroy the towers where they are coming from with the golden hammer.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Slime_Knight_1.2.zip",
          version: "1.2",
          source: "https://github.com/AdsGames/SlimeKnight",
          visible: true,
          controller: 0,
        },
        {
          id: "ce65e834-307f-471c-8293-6c9a30d4dc48",
          name: "Tic Tac Toe",
          shortName: "tictactoe",
          description:
            "Play Tic Tac Toe against a computer or your friends. Features three levels of difficulty for the casual and intense players.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "TicTacToe_4.3.zip",
          version: "4.3",
          source: "https://github.com/AdsGames/TicTacToe",
          visible: true,
          controller: 0,
        },
        {
          id: "bc56a6fc-56f5-4b00-b9e2-0119d5c2a433",
          name: "Space Fighter",
          shortName: "spacefighter",
          description:
            "Play as a lone space cruiser whom needs to fight through hoards of enemy space ships. The farther you get the more skilled the enemies become. \r\n\t\t*NOTE you must have .NET framework 4.0\r\n\t\t(http://www.microsoft.com/en-ca/download/details.aspx?id=17851) \r\n\t\tand XNA game studio redistributable\r\n\t\t(http://www.microsoft.com/en-ca/download/details.aspx?id=15163)\r\n                A game by Sullivan Stobo \r\n     ",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "Space_Fighter_1.0.zip",
          version: "1.0",
          visible: true,
          controller: 0,
        },
        {
          id: "6e03d116-5eab-44e7-b048-1bf4d2f67d09",
          name: "Jim Farm",
          shortName: "jimfarm",
          description:
            "A casual retro farming game. Jim inherits a run down farm from his Great Uncle, and he must turn it back into a successful farm.\r\n",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "JimFarm_1.0.1.zip",
          version: "1.0.1",
          source: "https://github.com/AdsGames/JimFarm",
          visible: true,
          controller: 1,
        },
        {
          id: "ee66bb3b-c387-4057-b9b1-24b9f934b39d",
          name: "Jims Alien Adventure",
          shortName: "jimsalienadventure",
          description:
            "The evil goat aliens are taking over Earth and destroying all the famous landmarks! Its all up to Jim McDonald to climb up the landmarks and shut down the flying alien goat saucers.\r\n",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "jimsalienadventure-v1.2.2.zip",
          version: "1.2.2",
          source: "https://github.com/AdsGames/JimsAlienAdventure",
          visible: true,
          controller: 0,
        },
        {
          id: "be32c2f6-1a1e-4790-9e08-b80fff678f53",
          name: "Jed Clicker",
          shortName: "jedclicker",
          description: "Build your way up from nothing by clicking the golden JedCoin. Win by making enough JedCoin to buy a Jed.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "JedClicker_1.0.zip",
          version: "1.0",
          source: "https://github.com/AdsGames/TapGameForJed",
          visible: false,
          controller: 0,
        },
        {
          id: "9a816edb-e3fe-4947-a909-9d76a86cd79f",
          name: "Jed Clicker JS",
          shortName: "jedclickerjs",
          description: "Build your way up from nothing by clicking the golden JedCoin. Win by making enough JedCoin to buy a Jed.",
          typeId: "f794ad76-a2f3-447b-8c28-d86ae966b9f8",
          file: "game.js",
          version: "1.0",
          source: "http://github.com/danwardvs/JedClickerJS2",
          width: 1000,
          height: 600,
          visible: false,
          controller: 0,
        },
        {
          id: "b19265f8-a63f-4bef-8a46-f7ac3887f66c",
          name: "Super Archer Man Jim",
          shortName: "superarcherman",
          description:
            "Armed with only a bow, you must infiltrate various strongholds and steal the crown. Once you have it, get back to where you started.",
          typeId: "be160ddb-b187-41e2-bfa0-29dea07379d7",
          file: "SuperArcherManJim.swf",
          version: "1.0",
          source: "http://github.com/alegemaate/SuperArcherMan",
          width: 640,
          height: 480,
          visible: true,
          controller: 0,
        },
        {
          id: "da53d10c-3864-4189-bb87-4908ab5aad9b",
          name: "Deep Space",
          shortName: "deepspace",
          description: "Guide your lost spaceship through the deep space and avoid space debris. This game is hard!",
          typeId: "f794ad76-a2f3-447b-8c28-d86ae966b9f8",
          file: "game.js",
          version: "1.0",
          source: "https://github.com/AdsGames/SpaceDoomJS",
          width: 960,
          height: 720,
          visible: true,
          controller: 0,
        },
        {
          id: "5bd9d63e-fadd-4cae-918f-461396775cb5",
          name: "Pong",
          shortName: "pong",
          description: "Classic pong. Play against a friend or against a computer player.",
          typeId: "f794ad76-a2f3-447b-8c28-d86ae966b9f8",
          file: "game.js",
          version: "1.0",
          source: "https://github.com/AdsGames/PongJS",
          width: 960,
          height: 720,
          visible: true,
          controller: 0,
        },
        {
          id: "764a88db-139d-4e52-84f4-f14401f50433",
          name: "Jumping Jimothy",
          shortName: "jumpingjimothy",
          description: "Jump on boxes while controlling gravity to reach the goat at the end of the level.",
          typeId: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          file: "jumpingjimothy - v2.4.zip",
          version: "2.4",
          source: "https://gitlab.com/danwardvs/JumpingJimothy",
          visible: true,
          controller: 2,
        },
        {
          id: "14c1634f-bb7b-4e0b-a764-8a7636025c61",
          name: "Brick Breaker",
          shortName: "brickbreaker",
          description: "Prevent the ball from hitting the dangerous lava below. Try to clear the stage of all bricks to win.",
          typeId: "9380b8dc-a8fe-4bb9-bf0b-860e16284309",
          file: "main.js",
          version: "1.1.1",
          source: "https://github.com/AdsGames/BrickBreakerJS",
          width: 550,
          height: 400,
          visible: true,
          controller: 0,
        },
        {
          id: "921ac0b2-b921-4dc4-a58a-e7c8f9f7fcff",
          name: "Solitaire",
          shortName: "solitaire",
          description: "A simple game of solitaire written in JS.",
          typeId: "9380b8dc-a8fe-4bb9-bf0b-860e16284309",
          file: "js/Main.js",
          version: "1.0",
          source: "https://github.com/alegemaate/SolitaireJS",
          width: 550,
          height: 400,
          visible: true,
          controller: 0,
        },
        {
          id: "03d9293f-082b-451f-90e4-b3009452d447",
          name: "Game of Life",
          shortName: "gameoflife",
          description: "A clone of Conway&#39;s Game of Life",
          typeId: "9380b8dc-a8fe-4bb9-bf0b-860e16284309",
          file: "js/Main.js",
          version: "1.0",
          source: "https://github.com/alegemaate/GameOfLifeJS/",
          visible: false,
          controller: 0,
        },
      ]);
    });
}
