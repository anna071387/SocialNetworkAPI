const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
    {
        username: "Snezhinka",
        email: "snezhinka@gmail.com",
        thought: ["testing"],
    },
];


// This allows to connect to server
connection.once("open", async () => {
  console.log("connected");

  // This allows to delete multiple users
  await User.deleteMany({});

  // This helps to insert data into the database
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeded");
  process.exit(0);
});