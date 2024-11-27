const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_login'
});

async function findUserByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
}

// Funcion para crear un nuevo usuario
async function createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10); // Encriptar la contraseña con bcrypt
    const rol = 'admin';
    const [result] = await pool.query('INSERT INTO users (username, password, rol) VALUES (?, ?, ?)', [username, hashedPassword, rol]);
    return result.insertId;
}

module.exports = {
    findUserByUsername,
    createUser
};