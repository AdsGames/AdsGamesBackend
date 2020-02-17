import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("Users")
    .del()
    .then(() => {
      return knex("Users").insert([
        {
          id: "ff6bdce8-5350-4f69-bf4a-f102d4d27346",
          username: "alegemaate",
          name: "Allan Legemaate",
          email: "alegemaate@gmail.com",
          roleId: "5c6216d9-a8a9-4302-8467-cddfbf6df787",
          avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
          about: "Hi i am allan",
          location: "Uxbridge, Ontario",
          website: "https://adsgames.net",
        },
        {
          id: "e35087d6-c49a-45d7-aa82-88967f1743b0",
          username: "theUserGuy",
          name: "User Jim",
          email: "theuserguy@gmail.com",
          roleId: "54e24760-7f71-410a-85fb-75aaab4a9613",
          avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
          about: "Swagger",
          location: "Somewhere, Location",
          website: "https://google.net",
        },
        {
          id: "121bdb6e-2a0a-4c99-9ac7-e577b3069f87",
          username: "limited",
          name: "Limited User",
          email: "limiteduser@gmail.com",
          roleId: "54e24760-7f71-410a-85fb-75aaab4a9613",
          avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
        },
      ]);
    });
}
