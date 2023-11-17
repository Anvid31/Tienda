import { conexion } from "../conexion.js"

const crear = async (producto)=>{
   const connection = await conexion.clienteMySQL()
   const query = "INSERT INTO producto SET ?"
   await connection.query(query, producto)
   connection.release()
}

const leer =  async()=>{
   const connection = await conexion.clienteMySQL()
   const [rows] = await connection.query("SELECT * FROM producto")
   connection.release()
   return rows
}

const detalle = async (idProducto)=>{
   const connection = await conexion.clienteMySQL()
   const query = "SELECT * FROM producto WHERE idProducto = ?"
   const [rows] = await connection.query(query, [idProducto])
   connection.release()
   return rows[0] || {}
}

const actualizar =  async (productoDetalle)=>{
   const connection = await conexion.clienteMySQL()
   const query = "UPDATE producto SET ?  WHERE idProducto = ?"
   await connection.query(query, [productoDetalle, productoDetalle.idProducto])
   connection.release()
}

const buscarProducto = async (idProducto)=>{
   const connection = await conexion.clienteMySQL()

   try {
      const [rows, _] = await connection.query(
         "SELECT * FROM producto WHERE idProducto = ?",
         [idProducto]
      )
      return rows[0] || null

   } catch (error) {
      throw error
   }
}

const buscarPrograma = async (programa)=>{
   const connection = await conexion.clienteMySQL()
   try {
      const [rows, _] = await connection.query(
         "SELECT programa FROM producto",
         [programa]
      )
      return rows[0] || null

   } catch (error) {
      throw error
   }
}

const eliminar =  async(idProducto)=>{
   const connection = await conexion.clienteMySQL()
   const query = "DELETE FROM producto WHERE idProducto = ?"
   await connection.query(query, [idProducto])
   connection.release()
}

export default {crear, leer, detalle, actualizar, eliminar, buscarProducto,buscarPrograma}
