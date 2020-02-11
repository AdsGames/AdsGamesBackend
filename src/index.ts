import * as express from "express";
import * as bodyParser from "body-parser";
import * as db from "./queries";
import * as dotenv from "dotenv";

// Load in dotenv
dotenv.config();

// Create express instance
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (_: express.Request, response: express.Response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(process.env.NODE_PORT, () => {
  console.log(`App running on port ${JSON.stringify(process.env.NODE_PORT)}.`);
});
