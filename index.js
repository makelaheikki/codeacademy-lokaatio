const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

var locationsrouter = express.Router();

locationsrouter.get("/1", (req, res) => {
  res.send(database[0]);
});

locationsrouter.get("/", function (req, res) {
  app.set("json spaces", "\t");

  res.send(database);
});

locationsrouter.get("/ugly", function (req, res) {
  res.send(database);
});

app.use("/api/locations", locationsrouter);

app.use("/hello", (req, res, next) => {
  console.log("hello");
  next();
});
app.use("/world", (req, res, next) => {
  console.log("world");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
