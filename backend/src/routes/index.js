const express = require('express')
const router = express.Router()

/*
Indica que cuando se acceda a la carpeta raíz (http://localhost:4000/) renderizará el Login.
Se utiliza router cuando las páginas se encuentran en una carpeta diferente.
*/
router.get('/', (req, res) => {
	res.render('auth/login')
})

module.exports = router