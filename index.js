const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.use(express.static("public"));

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.get("/api/locations", function (req, res) {
  app.set("json spaces", "\t");

  res.send(database);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
