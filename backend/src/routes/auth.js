const express = require('express')
const router = express.Router()
const passport = require('passport')
const { isLoggedIn } = require('../lib/auth')

router.get('/signup', (req, res) => {
	res.render('auth/signup')
})

router.post('/signup', passport.authenticate('local.signup', {
	successRedirect: '/profile',
	failureRedirect: '/signup',
	failureFlash: true
}))

router.get('/login', (req, res) => {
	res.render('auth/login')
})

router.post('/login', (req, res, next) => {
	passport.authenticate('local.login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	})(req, res, next)
})

router.get('/profile', isLoggedIn, (req, res) => {
	res.send(req.isAuthenticated())
})

router.post('/', (req, res) => {
	res.send(state=true)
})

router.get('/logout', (req, res, next) => {
	req.logOut(req.user, err => {
		if (err) return next(err)
		res.redirect('/login')
	})
})
module.exports = router