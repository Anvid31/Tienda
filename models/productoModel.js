import {usuarioDatosResModel} from "./usuarioModel.js"

function productoCrearReqModel (producto){
   this.fecha =producto.fecha
   this.precio = producto.precio
}

function productoDatosResModel (producto){
   this.idproducto = producto.idproducto
   this.fecha = producto.fecha
   this.precio = producto.precio
   this.usuarioEntity = new usuarioDatosResModel(producto.usuarioEntity)
}

function productoActualizarReqModel(producto){
   this.fecha=producto.fecha
   this.precio=producto.precio
}

export {productoCrearReqModel, productoDatosResModel, productoActualizarReqModel}