import { conexion } from "../conexion.js"
import { TABLE_PREGUNTAS, TP_IDPRODUCTO, TP_PROGRAMA } from "../constantes/constantes.js";

const crear = async (producto)=>{
   const connection = await conexion.clienteMySQL()
   const query = `INSERT INTO ${TABLE_PREGUNTAS} VALUES ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?`
   await connection.query(query, producto);
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
   const query = `SELECT * FROM ${TABLE_PREGUNTAS} WHERE ${TP_IDPRODUCTO} = ?`
   const [rows] = await connection.query(query, [idProducto])
   connection.release()
   return rows[0] || {}
}

const actualizar =  async (productoDetalle)=>{
   const connection = await conexion.clienteMySQL()
   const query = `"UPDATE ${TABLE_PREGUNTAS} SET ?  WHERE ${TP_IDPRODUCTO} = ?"`
   await connection.query(query, [productoDetalle, productoDetalle.idProducto])
   connection.release()
}

const buscarProducto = async (idProducto)=>{
   const connection = await conexion.clienteMySQL()

   try {
      const [rows, _] = await connection.query(
         `"SELECT * FROM ${TABLE_PREGUNTAS} WHERE ${TP_IDPRODUCTO} = ?"`,
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
         `"SELECT ${TP_PROGRAMA} FROM ${TABLE_PREGUNTAS}"`,
         [programa]
      )
      return rows[0] || null

   } catch (error) {
      throw error
   }
}

const eliminar =  async(idProducto)=>{
   const connection = await conexion.clienteMySQL()
   const query = `"DELETE FROM ${TABLE_PREGUNTAS} WHERE ${TP_IDPRODUCTO} = ?"`
   await connection.query(query, [idProducto])
   connection.release()
}

export default {crear, leer, detalle, actualizar, eliminar, buscarProducto,buscarPrograma}
