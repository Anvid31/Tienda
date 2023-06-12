function usuarioCrearReqModel(usuario){
   this.nombre=usuario.nombre 
   this.email=usuario.email
   this.user=usuario.user
   this.password=usuario.password 
}

function usuarioDatosResModel(usuario){
   this.idUsuario=usuario.idUsuario
   this.nombre=usuario.nombre
   this.email=usuario.email
   this.user=usuario.user
}  


export {usuarioCrearReqModel, usuarioDatosResModel}