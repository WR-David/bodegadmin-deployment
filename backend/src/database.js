const mysql = require('mysql')
const { promisify } = require('util')
const { database } = require('./keys')

/* 
Un pool es donde se almacena las conexiones. Cuando se solicita la conexión de un pool, se obtiene
una conexión que no se esté utilizando o una nueva conexión. Si el pool llegase a estar en el límite de conexiones 
entonces esperará a que se libere una conexión para continuar.
*/
const pool = mysql.createPool(database)

/*
getConnection como bien indica obtiene la conexión de la base de datos, getConnection simplifica el uso de 
connection.query() -> connection.release().
Al hacer dos llamados a pool.query() se utilizarían dos conexiones diferentes y se ejecutarían en paralelo.
Si se quisiera cerrar la conexión y retirarla del pool se utilizaría el comando connection.destroy().
Para manejar la conexión se utilizan (en este caso), dos variables, error y connection para manejar el tipo de error y 
comprobar la conexión
*/
pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('CONEXIÓN DB FALLIDA')
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('MUCHAS CONEXIONES A DB')
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('CONEXIÓN A DB RECHAZADA')
		}
	}

	if (connection) connection.release()
	console.log('DB CONECTADA')
	return
})

//Convertir Callbacks a Promesas
/*
Una función Callback es una función que se ejecutará luego de que se hayan finalizado un conjunto de tareas.
Entonces para poder utilizar Promesas hay que hacer la conversión de Callbacks a Promesas con promisify.
*/
pool.query = promisify(pool.query)

module.exports = pool