const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ubicación de las vistas

// Middleware para procesar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de sesiones
app.use(session({
    secret: 'papu', // Cambia esto a un secreto más complejo
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Cambia a true si usas HTTPS
}));

// Ruta para recursos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de autenticación
app.use('/', authRoutes);

// Ruta principal (opcional)
app.get('/', (req, res) => {
    res.redirect('/sadi'); // O redirige a /login
});

// Manejo de errores
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});