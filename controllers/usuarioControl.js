import {Router} from "express"
import respuestaHTTP from "../utils/respuestaHTTP.js"
import usuarioServicio from "../services/usuarioServicio.js"
import { usuarioCrearReqModel, usuarioDatosResModel } from "../models/usuarioModel.js"


const router = Router()




router.post("/",(req,res) =>{ // Crear
   
   usuarioServicio.crearUsuario(new usuarioCrearReqModel(req.body))
   .then( (usuario)=>{
      respuestaHTTP.exito(req,res,new usuarioDatosResModel(usuario),201)
   })
   .catch((err)=>{
      respuestaHTTP.error(req,res,err,"Error al crear usuario",400)
   })
})


router.get("/",(req,res) =>{  // Obtener

   const user = "Anvid"

   usuarioServicio.leerUsuario(user)
   .then( (usuario)=>{
      respuestaHTTP.exito(req,res,new usuarioDatosResModel(usuario),201)
   })
   .catch((err)=>{
      respuestaHTTP.error(req,res,err,"Error al leer usuario",400)
   })
})

export default router

