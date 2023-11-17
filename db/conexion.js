import mysql from 'mysql2/promise';

// Create a connection to the database
const pool =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node'
});

const conexion = {
    clienteMySQL: async ()=> {
        try {
            const connection = await pool.getConnection()

            console.log("Conexion Existosa")
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