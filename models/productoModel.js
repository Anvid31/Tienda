class productoCrearReqModel{
   constructor(producto) {
   this.programa=producto.programa
   this.asignatura=producto.asignatura
   this.corte=producto.corte
   this.marcoContex=producto.marcoContex
   this.pregunta=producto.pregunta
   this.opciones=producto.opciones
   this.clave=producto.clave
   this.justificacion=producto.justificacion
   this.docente=producto.docente
   this.fecha=producto.fecha
   }
}

class productoDatosResModel{
   constructor(producto) {
   this.idProducto=producto.idProducto
   this.programa=producto.programa
   this.asignatura=producto.asignatura
   this.corte=producto.corte
   this.marcoContex=producto.marcoContex
   this.pregunta=producto.pregunta
   this.opciones=producto.opciones
   this.clave=producto.clave
   this.justificacion=producto.justificacion
   this.docente=producto.docente
   this.fecha=producto.fecha
   }
}

class productoActualizarReqModel{
   constructor(producto) {
   this.programa=producto.programa
   this.asignatura=producto.asignatura
   this.corte=producto.corte
   this.marcoContex=producto.marcoContex
   this.pregunta=producto.pregunta
   this.opciones=producto.opciones
   this.clave=producto.clave
   this.justificacion=producto.justificacion
   this.docente=producto.docente
   this.fecha=producto.fecha
   }
}

export {productoCrearReqModel, productoDatosResModel, productoActualizarReqModel}