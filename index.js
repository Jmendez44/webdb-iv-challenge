const express = require("express");
const knex = require("knex");
const helmet = require("helmet");
const server = express();
const db = require("./data/helpers.js");
const PORT = 3000;

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => res.send("<h2>Test1</h2>"));

db.getDishes()
  .then(dish => console.log("dishes", dish))
  .catch(err => console.log("error", err));

server.listen(PORT, _ => console.log("Listening on port " + PORT));
