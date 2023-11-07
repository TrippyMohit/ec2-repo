const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello000, World!!!! - ${process.env.WORD}`);
  // res.send(`ellellosw, World!`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
