import productoRepositorio from "../db/repositorio/productoRepositorio.js"
import usuarioRepositorio from "../db/repositorio/usuarioRepositorio.js"
import equipoRepositorio from "../db/repositorio/equipoRepositorio.js"
import crypto from "crypto"

const crearproducto = (producto, user)=>{

   return new Promise((resolver, rechazar)=>{

      if(!producto.fecha || !producto.precio){
         rechazar("Datos Vacios")
      }

      const usuario = usuarioRepositorio.buscarUser(user)


      producto.idProducto=crypto.randomUUID()
      producto.precio = "0"
      producto.usuario=usuario

      productoRepositorio.crear(producto)

      resolver(productoRepositorio.detalle(producto.idProducto))
      console.log("Producto servicio 1/4 listo")
   })
   
}

const leerproducto = () => {

   return new Promise( (resolver,rechazar)=>{
      resolver(productoRepositorio.leer())
      console.log("Producto servicio 2/4 listo")

   })
 
}

const detalleproducto = (idProducto) => {

   return new Promise( (resolver,rechazar)=>{
      resolver(productoRepositorio.detalle(idProducto))
      console.log("Producto servicio 3/4 listo")
   })

} 


const actualizarproducto = (idProducto, producto, user)=>{

   return new Promise((resolver, rechazar)=>{

      if(!producto.fecha || !producto.precio){
         rechazar("Datos Vacios")
      }

      const productoDetalle= productoRepositorio.detalle(idProducto)
      const usuario = usuarioRepositorio.buscarUser(user)
      
      if(productoDetalle.usuario.idusuario != usuario.idusuario){
         rechazar("No se puede actualizar")
      }

      productoDetalle.fecha=producto.fecha
      productoDetalle.precio=producto.precio

      resolver(productoRepositorio.detalle(producto.idProducto))
      console.log("Producto servicio 4/4 listo")

   })
   
}
const eliminarproducto = (idProducto, user)=>{

   return new Promise((resolver, rechazar)=>{

      const productoDetalle= productoRepositorio.detalle(idProducto)
      const usuario = usuarioRepositorio.buscarUser(user)
      
      if(productoDetalle.usuario.idusuario != usuario.idusuario){
         rechazar("No se puede actualizar")
      }



      resolver(productoRepositorio.eliminar(productoDetalle.idProducto))
      console.log("Producto servicio 5/4 listo")
   })
   
}



export default {crearproducto, leerproducto, detalleproducto, actualizarproducto,eliminarproducto}