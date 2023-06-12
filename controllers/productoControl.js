import {Router} from "express"
import respuestaHTTP from "../utils/respuestaHTTP.js"
import productoServicio from "../services/productoServicio.js"
import { productoActualizarReqModel, productoCrearReqModel, productoDatosResModel } from "../models/productoModel.js"

const router = Router()

router.post("/",(req,res) =>{

   const user= "Anvid"



   productoServicio.crearproducto(new productoCrearReqModel(req.body), user) 


   .then((producto) =>{
      respuestaHTTP.exito(req,res,new productoDatosResModel(producto),201)
   })

   .catch((err)=>{
      respuestaHTTP.error(req,res,err,"Error al crear paquete",400)
      console.log(err)
   })
 
})



router.get("/",(req,res) =>{  // Obtener

   productoServicio.leerproducto()

   .then( Array=> {
      let losProductos= []

      Array.array.forEach( producto => {
         losProductos.push(new productoDatosResModel(producto))
      });

      respuestaHTTP.exito(req,res,losProductos,200)
   })

   .catch(err=>{
      respuestaHTTP.error(req,res,err,"ERROR AL LEER",500)
   })
   
})

router.get("/:id",(req,res) =>{  // Obtener

   productoServicio.detalleproducto(req.params.id)

   .then( producto=> {
   
      respuestaHTTP.exito(req,res,new  productoDatosResModel(producto),200)
   })

   .catch(err=>{
      respuestaHTTP.error(req,res,err,"Error al leer el detalle del producto",500)
   })
   
})

router.put("/:id",(req,res) =>{  // Obtener

   const user= "Anvid"

   productoServicio.actualizarproducto(req.params.id, new productoActualizarReqModel(req.body),user)

   .then( producto=> {
   
      respuestaHTTP.exito(req,res,new  productoDatosResModel(producto),200)
   })

   .catch(err=>{
      respuestaHTTP.error(req,res,err,"Error al actualizar el producto",500)
   })
   
})

router.delete("/:id",(req,res) =>{  // Obtener

   const user= "Anvid"

   productoServicio.eliminarproducto(req.params.id,user)

   .then( ()=> {  
   
      respuestaHTTP.exito(req,res,"Eliminado con exito",200)
   })

   .catch(err=>{
      respuestaHTTP.error(req,res,err,"Error al eliminar el producto",500)
   })
   
})





// router.post("/",(req,res) =>{ // Crear
//    // console.log(req.body)
//    // console.log(req.query)

//    if(req.query.error=="1"){
//       respuestaHTTP.error(req,res,"Error al momento de Crear Producto ", "Error al Crear Producto", 200)
//    }else{ 
//       respuestaHTTP.exito(req, res, "Productos Creados",201)       
//    }
       
// })

export default router