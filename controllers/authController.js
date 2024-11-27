const bcrypt = require('bcryptjs');
const User = require('../models/User.js');
const jwt = require('jsonwebtoken');

async function login(req, res) {
    const { username, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const user = await User.findUserByUsername(username);

        // Verificar si el usuario existe y la contraseña es correcta
        if (user && await bcrypt.compare(password, user.password)) {
            // Iniciar sesión (guardar el ID del usuario en la sesión)
            req.session.userId = user.id;
            const token = jwt.sign({ userId: user.id }, 'papu', { expiresIn: '1h' });
            req.session.token = token;
            res.cookie('jwt', token, { httpOnly: true });
            return res.redirect('/sadi');
        } else {
            return res.render('login', { error: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        return res.status(500).send('Error al buscar el usuario');
    }
}

module.exports = { login };