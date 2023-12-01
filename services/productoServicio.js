import productoRepositorio from "../db/repositorio/productoRepositorio.js"
import crypto from "crypto"

const crearproducto = async (producto)=>{

   try {
      if( !producto.fecha || !producto.codigo || !producto.programa || !producto.asignatura ||
          !producto.corte ||!producto.unidadAprendizaje|| !producto.competenciaEvaluadora ||
          !producto.marcoContex || !producto.pregunta || !producto.a || !producto.b || !producto.c ||
          !producto.clave || !producto.evidencia || !producto.justificacion || !producto.diseñado ){
         console.log("Datos Faltantes")
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


   if( !producto.fecha || !producto.codigo || !producto.programa || !producto.asignatura ||
      !producto.corte ||!producto.unidadAprendizaje|| !producto.competenciaEvaluadora ||
      !producto.marcoContex || !producto.pregunta || !producto.a || !producto.b || !producto.c ||
      !producto.clave || !producto.evidencia || !producto.justificacion || !producto.diseñado ){
     console.log("Datos Faltantes al actualizar")
     }

      const productoDetalle= productoRepositorio.detalle(idProducto)


      productoDetalle.fecha=producto.fecha
      productoDetalle.codigo=producto.codigo
      productoDetalle.programa=producto.programa
      productoDetalle.asignatura=producto.asignatura
      productoDetalle.corte=producto.corte
      productoDetalle.unidadAprendizaje=producto.unidadAprendizaje
      productoDetalle.competenciaEvaluadora=producto.competenciaEvaluadora
      productoDetalle.marcoContex=producto.marcoContex
      productoDetalle.pregunta=producto.pregunta
      productoDetalle.a=producto.a
      productoDetalle.b=producto.b
      productoDetalle.c=producto.c
      productoDetalle.d=producto.d
      productoDetalle.clave=producto.clave
      productoDetalle.evidencia=producto.evidencia
      productoDetalle.justificacion=producto.justificacion
      productoDetalle.diseñado=producto.diseñado
      

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