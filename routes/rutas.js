import productoControl from "../controllers/productoControl.js"


const rutas= (app)=>{
   app.use("/producto", productoControl)
}

export {rutas}