const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const app = express()
const users = require('./routes/users')
app.set('port', process.env.PORT || 9000)

//middlewares-------
const dboptions = {
    host: 'localhost',
    user: '',
    password: '',
    database: ''
}

app.use(myconn(mysql, dboptions, 'single'))
app.use(cors())


//rutas----
app.get('/', (req, res)=>{
    res.send('server')
})
app.use('/api', users)
app.use(express.json()) //ojo con este metodo

//server run----
app.listen(app.get('port'), ()=>{console.log
    ('server running on port', app.get('port'))})


