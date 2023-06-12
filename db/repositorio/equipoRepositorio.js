var array= []

const crear = ()=>{

   let nombreEquipos= ["cucuta","Bogota","chingon"]

   for(let i=0;i<nombreEquipos.length;i++){
      const equipo={
         id: i+1,
         nomrbre: nombreEquipos[i]
      }
      array.push(equipo)

   }
   console.log(array)

}

const buscarId = (id)=>{

   const equipo = array.find(equipo => equipo.id == id )

   return equipo ? equipo : null
}

export default {crear, buscarId}