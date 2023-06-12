var array=[]

const crear = (producto)=>{
   array.push(producto)
}

const leer = ()=>{
   return array
}

const detalle = (idproducto)=>{
   
   const producto = array.find(producto=>producto.idproducto ==  idproducto)

      return producto ? producto : {}
}

const actualizar = (productoDetalle)=>{
   
   const index = array.findIndex(producto=>producto.idproducto ==  productoDetalle.idproducto)

   if (index != -1){

      array[index]=productoDetalle
      return array[index]

   }else{

      return {}
   }

   // return producto ? producto : {}
}

const eliminar = (idproducto)=>{
   
   const index = array.findIndex(producto=>producto.idproducto ==  idproducto)

   if (index != -1){

      array.splice(index, 1)

   }

}

const misProductos= (idUsuario)=>{

   const losProductos= array.filter(producto => producto.usuarioEntity.idUsuario == idUsuario) 

   return losProductos ? losProductos : []
}

export default {crear, leer, detalle, actualizar, eliminar, misProductos}
