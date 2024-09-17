// import { Express } from 'express'

const express = require("express");
const mongoose = require("mongoose");
const app = express();


app.use(express.json())

app.get('/', (req, res) => {
  res,send("hola desde node api")
})

app.post('/api/products', (req, res) => {
  console.log(req.body)
  res.send(req.body)
}), 
mongoose
  .connect(
    "mongodb+srv://sergiom8alexanderd8:5IogQxLWciiFJrTu@cluster0.foawt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("OK conexion exitosa")
    app.listen(3000, () => {
      console.log("server corriendo en el puerto 3000")
    })
  })
  .catch(() => {
    console.log("fallo");
  });


