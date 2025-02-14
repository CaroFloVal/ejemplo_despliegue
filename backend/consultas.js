const pool = require('./db/db.js');

const getUsers = async () =>{
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
}

module.exports = {
    getUsers
}