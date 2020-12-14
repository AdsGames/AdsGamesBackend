import * as Knex from "knex";

export async function seed(knex: Knex): Promise<number[]> {
  return knex("GameTypes")
    .del()
    .then(() => {
      return knex("GameTypes").insert([
        {
          id: "ecb6dc28-6b9d-4c18-a9ca-39bb702ee401",
          name: "Download",
          description: "Downloadable zip",
        },
        {
          id: "9df7c54f-6c74-4647-8b86-09b548d61b07",
          name: "Scratch 2",
          description: "Scratch 2 embed id",
        },
        {
          id: "050533ff-e40e-4056-9526-1f4bb88a04b0",
          name: "Java Applet",
          description: "Java applet jar file",
        },
        {
          id: "be160ddb-b187-41e2-bfa0-29dea07379d7",
          name: "Flash",
          description: "Flash applet",
        },
        {
          id: "f794ad76-a2f3-447b-8c28-d86ae966b9f8",
          name: "Allegro JS",
          description: "Allegro JS bundle",
        },
        {
          id: "9380b8dc-a8fe-4bb9-bf0b-860e16284309",
          name: "Phaser JS",
          description: "Phaser JS bundle",
        },
      ]);
    });
}
