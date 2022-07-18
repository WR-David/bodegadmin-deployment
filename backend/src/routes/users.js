const express = require('express')
const router = express.Router()
const db = require('../database')
const { isLoggedIn } = require('../lib/auth')

router.get('/add', isLoggedIn, (req, res) => {
	res.render('users/add')
})

router.post('/add', async (req, res) => {
	const { nombre, apePat, apeMat, correo, rut, pass, id_TUsuario } = req.body
	const newUser = {
		nombre,
		apePat,
		apeMat,
		correo,
		rut,
		pass,
		id_TUsuario,
		estado: 1
	}
	await db.query('INSERT INTO usuario set ?', [newUser])
	req.flash('success', 'Usuario Guardado Correctamente')
	res.redirect('/users')
})

router.get('/', async (req, res) => {
	const users = await db.query('SELECT * FROM usuario WHERE estado = 0')
	res.render('users/list', { users })
})

router.get('/delete/:id', async (req, res) => {
	const { id } = req.params
	await db.query('UPDATE usuario SET estado = 0 WHERE idUsuario = ?', [id])
	res.redirect('/users')
})

router.get('/edit/:id', async (req, res) => {
	const { id } = req.params
	const users = await db.query('SELECT * FROM usuario WHERE idUsuario = ?', [id])
	console.log(users[0])
	res.render('users/edit', { user: users[0] })
})

router.post('/edit/:id', async (req, res) => {
	const { id } = req.params
	const { nombre, apePat, apeMat, correo, rut, pass, id_TUsuario, estado } = req.body
	const editUser = {
		nombre,
		apePat,
		apeMat,
		correo,
		rut,
		pass,
		id_TUsuario,
		estado
	}
	await db.query('UPDATE usuario SET ? WHERE idUsuario = ?', [editUser, id])
	res.redirect('/users')
})

module.exports = router