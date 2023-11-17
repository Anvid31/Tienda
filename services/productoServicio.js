import productoRepositorio from "../db/repositorio/productoRepositorio.js"
import crypto from "crypto"

const crearproducto = async (producto)=>{

   try {
      if( !producto.programa || !producto.asignatura || !producto.corte || !producto.marcoContex || !producto.pregunta || !producto.opciones || !producto.clave || !producto.justificacion || !producto.docente || !producto.fecha){
         rechazar("Datos Faltantes")
      }

      producto.idProducto=crypto.randomUUID()
      await productoRepositorio.crear(producto)
      return await productoRepositorio.buscarProducto(producto.idProducto)

   } catch(error) {
        console.log("An error has occurred: " + error);
    }
  
   
}

const leerproducto = async () => {

   try{
      const prod = await productoRepositorio.leer()

      if(!prod) {
         throw new Error("No se puedo Leer esto")
      }
      return prod
   } catch(error) {
      throw error
   }
 
}

const detalleproducto = async (idProducto) => {

   return await productoRepositorio.detalle(idProducto)

} 


const actualizarproducto =  async (idProducto, producto)=>{


      if( !producto.programa || !producto.asignatura || !producto.corte || !producto.marcoContex || !producto.pregunta || !producto.opciones || !producto.clave || !producto.justificacion || !producto.docente || !producto.fecha){
         throw new Error("Datos VACIOS")
      }

      const productoDetalle= productoRepositorio.detalle(idProducto)

      productoDetalle.programa=producto.programa
      productoDetalle.asignatura=producto.asignatura
      productoDetalle.corte=producto.corte
      productoDetalle.marcoContex=producto.marcoContex
      productoDetalle.pregunta=producto.pregunta
      productoDetalle.opciones=producto.opciones
      productoDetalle.clave=producto.clave
      productoDetalle.justificacion=producto.justificacion
      productoDetalle.docente=producto.docente
      productoDetalle.fecha=producto.fecha

      await productoRepositorio.actualizar(productoDetalle)

      return await productoRepositorio.detalle(productoDetalle.idProducto)

}

const leerListaProductos = async (programa)=>{
   try {
      const u = await productoRepositorio.buscarPrograma(programa)

      if(u == null){
         throw new Error("No se encontro el Programa")
      }


   } catch (error) {
        console.log("An error has occurred: " + error);
    }
}


 const eliminarproducto = async(idProducto)=>{

   const productoDetalle = await productoRepositorio.detalle(idProducto)

   return await productoRepositorio.eliminarProducto(productoDetalle.idProducto)
   
 }

export default {crearproducto, leerproducto, detalleproducto, actualizarproducto, leerListaProductos, eliminarproducto}