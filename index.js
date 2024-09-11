// import { Express } from 'express'

const express = require ('express')
const app = express()
app.listen(3000, () => {
  console.log("server corriendo en le puerto 3000")
})

app.get('/', (req,res) =>{
  res.send("hola desde node Api")
})