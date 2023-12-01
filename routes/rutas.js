import productoControl from "../controllers/productoControl.js"
import { Router } from "express"

const router= Router()

router.post("/producto",
   productoControl.postProducto)

router.get("/producto",
   productoControl.getProducto)

router.get("/producto/:id",
   productoControl.detalleProducto)

router.put("/producto/:id",
   productoControl.putProducto)

router.delete("/producto/:id",
   productoControl.eliminarProducto)


export default router

