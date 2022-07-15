const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')

//inicializaciones
//Se crea una instancia de express
const app = express()
require('./lib/passport')

//settings
/*
Se establece que si no hay un servidor que te conceda el puerto entonces se utilizará el puerto 4000 (Puede ser cualquiera
que no esté siendo utilizado).

Línea 22 se establece el directorio donde se encuentran los archivos de plantilla.

El método app.engine(ext, callback) es para crear un motor de plantilla, donde ext es la extensión del archivo
y callback la función del motor. defaultLayout es la plantilla por default que se mostrará en las rutas.

layoutDir indica el directorio donde se encuentra el defaultLayout.

partialsDir indica el directorio de los partials, Partials son funciones que retornan funciones con argumentos ya
predefinidos y necesitan argumentos para completarse, por ejemplo el navbar, mensajes de éxito, de error, etc.

extname Para algunas extensiones es necesario establecer la extensión en esa propiedad

helpers indica la ruta donde estarán los handlebars, se pueden utilizar para transformar output, iterar sobre datos, etc.

Para finalizar se registra el motor de plantilla (línea 44)
*/
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
	defaultLayout: 'main',
	layoutDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
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