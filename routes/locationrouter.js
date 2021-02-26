const express = require("express");
const locationsrouter = require("../../mun-lokaatio-api/routes/locationrouter.js");
const locationrouter = express.Router();
const database = require("../database/crudrepository.js");

locationrouter.get("/", function (req, res) {
  res.json(database.findAll());
});

locationrouter.get("/:id([0-9]+)", (req, res) => {
  const id = Number(req.params.id);
  res.json(database.findById(id));
});

locationrouter.delete("/:id([0-9]+)", (req, res) => {
  const id = Number(req.params.id);
  let result = res.json(database.deleteById(id));
  if (result) {
    res.status(204);
    res.end();
  } else {
    res.status(404);
    res.end();
  }
});

module.exports = locationrouter;
