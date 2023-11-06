const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`bellow, World! - ${process.env.WORD}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
