import express from "express"
import { rutas } from "./routes/rutas.js"
import equipoRepositorio from "./db/repositorio/equipoRepositorio.js"

var app = express()


const port = 3000
const host = "localhost"

// Usar archivos .Json con postman
app.use("/",express.static("public"))  
app.use(express.json())
app.use(express.urlencoded({extended:true}))

rutas(app)

// End points en Postman



app.listen(port, host,()=>{
   console.log(`Escuchando por el http://${host}:${port}`)

   equipoRepositorio.crear()
})

