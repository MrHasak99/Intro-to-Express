const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ name: "Hamad" });
});

app.listen(8000, () => {
  console.log("The server is now online!");
});
