const User = require('../models/User.js');

async function register(req, res) {
    const { username, password } = req.body;
    
    try {
        //verificar si el usuario ya existe
        const existingUser = await User.findUserByUsername(username);
        if (existingUser) {
            return res.render('register', { error: 'El usuario ya existe' });
        }

        //crear el nuevo usuario
        const userId = await User.createUser(username, password);
        req.session.userId = userId; // Iniciar sesión automáticamente
        res.redirect('/sadi');
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).send('Error al crear el usuario');
    }
}

module.exports = { register };