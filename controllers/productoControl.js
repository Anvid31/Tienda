import respuestaHTTP from "../utils/respuestaHTTP.js"
import productoServicio from "../services/productoServicio.js"
import { productoActualizarReqModel, productoCrearReqModel, productoDatosResModel } from "../models/productoModel.js"


const postProducto = async(req,res) =>{
   
   try {
      const productoReq = new productoCrearReqModel(req.body)
      const product = await productoServicio.crearproducto(productoReq)
      const productoRes = new productoDatosResModel(product)
      respuestaHTTP.exito(req,res,productoRes,201)
   } catch (error) {
      respuestaHTTP.error(req,res,"Error al crear el producto",error,403)
   }
   
}

const getProducto = async(req,res) =>{  

   try {
      const product = await productoServicio.leerproducto(req.producto)
      const productoRes = new productoDatosResModel(product)
      respuestaHTTP.exito(req,res,productoRes,201)
      
   } catch (error) {
      respuestaHTTP.error(req,res,"Error al leer",error,400)
   }
}

const detalleProducto= async(req,res)=>{

   try {
      const producto = await productoServicio.detalleproducto(req.params.idProducto)
      respuestaHTTP.exito(req,res,new productoDatosResModel(producto),200)
   } catch (error) {
      respuestaHTTP.error(req,res,"Error al leer en detalle",error,400)
   }
}

const putProducto = async(req,res)=>{

   try {
      const producto = await productoServicio.actualizarproducto(req.params.idProducto, new productoActualizarReqModel)
      respuestaHTTP.exito(req,res,new productoDatosResModel(producto),200)
   } catch (error) {
      respuestaHTTP.error(req,res,"Error al actualizar",error,400)
   }
}


const eliminarProducto = async(req,res)=>{
   try {
      const producto = await productoServicio.eliminarproducto(req.params.idProducto)
      respuestaHTTP.exito(req,res,new productoDatosResModel(producto),200)
   } catch (error) {
      respuestaHTTP.error(req,res,"Error al actualizar",error,400)
   }
}

export default { postProducto, getProducto, detalleProducto, putProducto,eliminarProducto}