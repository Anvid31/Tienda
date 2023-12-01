import router from "./rutas.js"

const configuracionSeguridad= (app)=>{
    app.use("/producto",router)
}
export {configuracionSeguridad}