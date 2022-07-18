const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../database')
const helpers = require('./helpers')

passport.use('local.signup', new LocalStrategy({
	usernameField: 'rut',
	passwordField: 'pass',
	passReqToCallback: true
}, async (req, rut, pass, done) => {
	const newUser = {
		nombre: 'test',
		apePat: 'test',
		apeMat: 'test',
		correo: 'teste@teste.com',
		rut,
		pass,
		id_TUsuario: 1,
		estado: 1
	}
	newUser.pass = await helpers.encryptPassword(pass)

	const result = await db.query('INSERT INTO usuario SET ?', [newUser])
	newUser.idUsuario = result.insertId
	return done(null, newUser)
}))

passport.use('local.login', new LocalStrategy({
	usernameField: 'rut',
	passwordField: 'pass',
	passReqToCallback: true
}, async (req, rut, pass, done) => {
	const rows = await db.query('SELECT * FROM usuario WHERE rut = ? AND estado = 1', [rut])
	if (Object.keys(rows).length > 0) {
		const user = rows[0]
		const validPass = await helpers.matchPassword(pass, user.pass)
		if (validPass) {
			done(null, user, req.flash('success', 'Bienvenido'+ user.nombre))
		} else {
			done(null, user, req.flash('message', 'Contraseña incorrecta'))
		}
	} else {
		return done(null, false, req.flash('message', 'El usuario no existe'))
		
	}
}))

passport.serializeUser((user, done) => {
	done(null, user.idUsuario)
	console.log(user)
})

passport.deserializeUser(async (id, done) => {
	const rows = await db.query('SELECT * FROM usuario WHERE idUsuario = ?', [id])
	done(null, rows[0])
})