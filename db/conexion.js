import mysql from 'mysql2/promise';
import { variables} from "../utils/variables.js"

// Create a connection to the database
const pool =  mysql.createPool({
    host: variables.MYSQL_HOST,
    user: variables.MYSQL_USER,
    password: variables.MYSQL_PASSWORD,
    database: variables.MYSQL_DB,
});

const conexion = {
    clienteMySQL: async ()=> {
        try {
            const connection = await pool.getConnection()

            console.log("Conexion a la Base de datos a sido Realizada con exito")
            connection.release()

            return connection
        }
        catch (err) {
            console.error("Failed to conect",err)
            throw err
        }
    }
}

export {conexion}