const express = require("express");
const path = require("path")
const app = express();




app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  res.send("OK")
});

app.listen(1000, () => {
  console.log("Server Started");
});