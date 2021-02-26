const express = require("express");
const locationrouter = require("./routes/locationrouter.js");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.use("/api/locations", locationrouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
