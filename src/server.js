import express from "express";
import playerRoutes from "./routes/playerRoutes.js"

const api = new express()

const port = 18024 //matricula individual 

api.use("/players", playerRoutes)
api.listen(port, () => {
    console.log(`El API ha sido iniciada y se encuentra escuchando por el puerto: ${port}`)
})