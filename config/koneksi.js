var Sequelize = require("sequelize");

var koneksi = new Sequelize('api_express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};
 
db.Sequelize = Sequelize;
db.koneksi = koneksi;

// import model
db.user = require('../models/user')(koneksi,Sequelize);

module.exports = db;