import express from "express"
import { conexion } from "./db/conexion.js"
import { variables } from "./utils/variables.js"
import productoRepositorio from "./db/repositorio/productoRepositorio.js"
import { configuracionSeguridad } from "./routes/config.js"

var app = express()


const port = variables.EXPRESS_PORT
const host = variables.EXPRESS_HOST


// app.use("/",express.static("public"))  
app.use(express.json())
app.use(express.urlencoded({extended:true}))

conexion
   .clienteMySQL()
   .then((connection) => {
      app
         .listen(port, host,()=>{
         console.log(`Escuchando por el http://${host}:${port}`)
         productoRepositorio.crear().then(() => {
            console.log("Formulario Creado")
         })
      })
   })
   .catch((err)=>{
      console.error("Error al Conectar : ", err)
      process.exit()
   })

      configuracionSeguridad(app)

     
      