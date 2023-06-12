import productoControl from "../controllers/productoControl.js"
import usuarioControl from "../controllers/usuarioControl.js"

const rutas=  (app)=>{
   app.use("/producto", productoControl)
   app.use("/usuario", usuarioControl)
}

export {rutas}