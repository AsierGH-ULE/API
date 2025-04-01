const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const sensorRoutes = require('./routes/sensors.routes');
const readingRoutes = require('./routes/readings.routes');
const authRoutes = require('./routes/auth.route'); // Corrected filename
var fs = require('fs');
var https = require('https');

var options = {
    key: fs.readFileSync(__dirname + '/SSL/apirest.key'),
    cert: fs.readFileSync(__dirname + '/SSL/apirest.crt'),
    passphrase: 'asier'
};
const app = express();
const port = 443;



// Conectar a la base de datos
// connectDB();

//configuracion
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/sensors', sensorRoutes);
app.use('/readings', readingRoutes);
app.use('/auth', authRoutes);


// Ruta de prueba
app.get('/test', (req, res) => res.json({ msg: 'El API REST funciona!' }));

// Iniciar servidor
https.createServer(options, app).listen(port, function () {
    console.log('servidor node.js funcionando en el puerto: ' + port);
});