// import { Express } from 'express'

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.listen(3000, () => {
  console.log("server corriendo en le puerto 3000");
});

app.get("/", (req, res) => {
  res.send("hola desde node Api desde vs codeeee");
});
mongoose
  .connect(
    "mongodb+srv://sergiom8alexanderd8:5IogQxLWciiFJrTu@cluster0.foawt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("OK");
  })
  .catch(() => {
    console.log("fallo");
  });
