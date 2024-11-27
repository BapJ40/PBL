const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const registerController = require('../controllers/registerController');

// Ruta para el formulario de inicio de sesión
router.post('/login', authController.login);

// Ruta para mostrar el formulario de login (opcional)
router.get('/login', (req, res) => {
    
    res.render('login', { error: null }); // Renderiza la vista sin error
});

// Ruta para el registro
router.post('/register', registerController.register);

// Ruta para mostrar el formulario de registro (opcional)
router.get('/register', (req, res) => {
    res.render('register', { error: null }); // Renderiza la vista sin error
});

// Ruta para el dashboard (opcional)
router.get('/sadi', (req, res) => {
    // if (!req.session.userId) {
    //     return res.redirect('/login'); // Redirigir si no está autenticado
    // }
    res.render('sadi', { error: null }); // Aquí puedes renderizar una vista
});

router.get('/', (req, res) => {
    res.redirect('/sadi');
});

module.exports = router;