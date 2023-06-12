import usuarioRepositorio from "../db/repositorio/usuarioRepositorio.js";
import crypto from "crypto"
import bcrypt from "bcrypt"

const crearUsuario = (usuario)=>{

   return new Promise(  (resolver,rechazar) => {

      if(!usuario.nombre || !usuario.email || !usuario.user || !usuario.password){
         rechazar("Datos Vacios")
      }
   
      if(usuarioRepositorio.buscarEmail(usuario.email) !=null){
         rechazar("Este correo ya esta registrado")
      }
      
      if(usuarioRepositorio.buscarUser(usuario.user) !=null){
         rechazar("Este usuario ya esta registrado")
      }
    
      usuario.idUsuario= crypto.randomUUID()
      usuario.passwordEn= bcrypt.hashSync(usuario.password, 10)

      usuarioRepositorio.crear(usuario)
      
      resolver(usuarioRepositorio.buscarUser(usuario.user))
   })

}

const leerUsuario = (user)=>{

   return new Promise(  (resolver,rechazar) => {

      const usuario = usuarioRepositorio.buscarUser(user)

      if(usuario == null){
         rechazar("No se encuentra el usuario")

      }
      usuarioRepositorio.crear(usuario)
      resolver(usuario)
   })

}

export default {crearUsuario, leerUsuario}   