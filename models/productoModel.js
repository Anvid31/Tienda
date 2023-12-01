class productoCrearReqModel{
   constructor(producto) {  
      this.fecha=producto.fecha 
      this.codigo=producto.codigo
      this.programa=producto.programa
      this.asignatura=producto.asignatura
      this.corte=producto.corte
      this.unidadAprendizaje=producto.unidadAprendizaje
      this.competenciaEvaluadora=producto.competenciaEvaluadora
      this.marcoContex=producto.marcoContex
      this.pregunta=producto.pregunta
      this.a=producto.a
      this.b=producto.b
      this.c=producto.c
      this.d=producto.d
      this.clave=producto.clave
      this.evidencia=producto.evidencia
      this.justificacion=producto.justificacion
      this.diseñado=producto.diseñado
   }
}

class productoDatosResModel{
   constructor(producto) {
    this.idProducto=producto.idProducto
     this.fecha=producto.fecha 
      this.codigo=producto.codigo
      this.programa=producto.programa
      this.asignatura=producto.asignatura
      this.corte=producto.corte
      this.unidadAprendizaje=producto.unidadAprendizaje
      this.competenciaEvaluadora=producto.competenciaEvaluadora
      this.marcoContex=producto.marcoContex
      this.pregunta=producto.pregunta
      this.a=producto.a
      this.b=producto.b
      this.c=producto.c
      this.d=producto.d
      this.clave=producto.clave
      this.evidencia=producto.evidencia
      this.justificacion=producto.justificacion
      this.diseñado=producto.diseñado
   }
}

class productoActualizarReqModel{
   constructor(producto) {
      this.fecha=producto.fecha 
      this.codigo=producto.codigo
      this.programa=producto.programa
      this.asignatura=producto.asignatura
      this.corte=producto.corte
      this.unidadAprendizaje=producto.unidadAprendizaje
      this.competenciaEvaluadora=producto.competenciaEvaluadora
      this.marcoContex=producto.marcoContex
      this.pregunta=producto.pregunta
      this.a=producto.a
      this.b=producto.b
      this.c=producto.c
      this.d=producto.d
      this.clave=producto.clave
      this.evidencia=producto.evidencia
      this.justificacion=producto.justificacion
      this.diseñado=producto.diseñado
   }
}

export {productoCrearReqModel, productoDatosResModel, productoActualizarReqModel}