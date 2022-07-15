const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

//inicializaciones
const app = express()
require('./lib/passport')

//settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
	defaultLayout: 'main',
	layoutDir: path.join(app.get('views'), 'laysouts'),
	partialsDIr: path.join(app.get('views'), 'partials'),
	extname: '.hbs',
	helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs')

//middlewares
app.use(session({
	secret: 'userSession',
	resave: false,
	saveUninitialized: false
}))
app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())


//variables globales
app.use((req, res, next) => {
	app.locals.success = req.flash('success')
	app.locals.message = req.flash('message')
	app.locals.user = req.user
	next()
})


//routes
app.use(require('./routes'))
app.use(require('./routes/auth'))
app.use('/users', require('./routes/users'))

//public
app.use(express.static(path.join(__dirname, 'public')))

//starting server
app.listen(app.get('port'), () => {
	console.log('Server on Port', app.get('port'))
})