const express = require("express");
const path = require("path");

const port = parseInt(process.env.PORT || "5007");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, () => {
  console.log(`App now running on port: ${port}`);
});