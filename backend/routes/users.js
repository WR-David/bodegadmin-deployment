const express = require('express')
const { serialize } = require('v8')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conne) => { //error y query
        if (err) return res.send(err) //checkeamos error en la conexion
        conne.query('SELECT * FROM usuario', (err, rows) => { //creamos la query
            if (err) return res.send(err) //checkeamos denuevo
            res.json(rows) //devolvemos rows en formato json
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conne) => { //error y query
        if (err) return res.send(err)
        conne.query('INSERT INTO usuario SET ?', [req.body])
        res.send('succes')
    })
})

routes.delete('/:id', async (req, res) => {
	req.getConnection((err, conne) => {
        if (err) return res.send(err)
        const { id } = req.params
        conne.query('UPDATE usuario SET estado = 0 WHERE idUsuario = ?', [id])
	    res.send('success')
    })
})

routes.put('/:id', async (req, res) => {
	req.getConnection((err, conne) => {
        if (err) return res.send(err)
        const { id } = req.params
        conne.query('UPDATE usuario WHERE idUsuario = ? SET ?', [req.body, id])
	    res.send('success')
    })
})


module.exports = routes