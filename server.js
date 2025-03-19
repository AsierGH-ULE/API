const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const sensorRoutes = require('./routes/sensors.routes');
const readingRoutes = require('./routes/readings.routes');
const authRoutes = require('./routes/auth.routes');
const app = express();
const port = 3000 || process.env.PORT;
// Conectar a la base de datos
connectDB();

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
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));