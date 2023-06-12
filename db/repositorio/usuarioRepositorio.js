var array=[]

const crear = (usuario)=>{
   array.push(usuario)
}

const buscarUser = (user)=>{
   const usuario = array.find((usuario)=>usuario.user == user)
   return usuario ? usuario:null
}


const buscarEmail = (email)=>{
   const usuario = array.find((usuario)=>usuario.email == email)
   return usuario ? usuario:null
}

export default {crear, buscarUser, buscarEmail }
