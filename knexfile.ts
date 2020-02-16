require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      port: process.env.PG_PORT,
      host: process.env.PG_HOST,
    },
  },
};
