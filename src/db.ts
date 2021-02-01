import "dotenv/config";
import knex from "knex";

export const client = knex({
  client: "pg",
  connection: {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: 5432,
  },
});
