import express from "express"
import { conexion } from "./db/conexion.js"
import { variables } from "./utils/variables.js"
import { rutas } from "./routes/rutas.js"
import productoRepositorio from "./db/repositorio/productoRepositorio.js"

var app = express()


const port = variables.EXPRESS_PORT
const host = variables.EXPRESS_HOST


// app.use("/",express.static("public"))  
app.use(express.json())
app.use(express.urlencoded({extended:true}))



conexion
      .clienteMySQL()
      .then((connection) => {
         app.listen(port, host,()=>{
         console.log(`Escuchando por el http://${host}:${port}`)
         productoRepositorio.crear()
       })
      })
      .catch((err)=>{
         console.error("Error al Conectar : ", err)
         process.exit()
      })
      