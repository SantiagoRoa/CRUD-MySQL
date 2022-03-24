const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');

const app = express();

const personaRoutes = require('./routes/routes');
const polizaRoutes = require('./routes/routes');
const contactoRoutes = require('./routes/routes');
const telefonoRoutes = require('./routes/routes');
const tipo_contactoRoutes = require('./routes/routes');
const tomadorRoutes = require('./routes/routes');
const vehiculoRoutes = require('./routes/routes');

const {
    urlencoded
} = require('express');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

app.use(morgan('dev'));
app.use(myConnection(mysql, { //Conexión
    host: 'localhost',
    user: 'root',
    password: 'Passw0rd',
    port: 3306,
    database: 'polizas'
}, 'single'))
app.use(express.urlencoded({
    extended: false
}));


app.use('/', personaRoutes);
app.use('/contacto', contactoRoutes);
app.use('/telefono', telefonoRoutes);
app.use('/tipo_contacto', tipo_contactoRoutes);
app.use('/tomador', tomadorRoutes);
app.use('/vehiculo', vehiculoRoutes);
app.use('/poliza', polizaRoutes);

app.get('/', (req, res) => {
    res.redirect('/persona');
  })
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));