const config = require('./config.js')
const db = {
    "development": {
        "username": config.DB.username,
        "password": config.DB.password,
        "database": config.DB.database,
        "host": config.DB.host,
        "dialect": config.DB.dialect,
    },
    "test": {
        "username": config.DB.username,
        "password": config.DB.password,
        "database": config.DB.database,
        "host": config.DB.host,
        "dialect": config.DB.dialect,
    },
    "production": {
        "username": config.DB.username,
        "password": config.DB.password,
        "database": config.DB.database,
        "host": config.DB.host,
        "dialect": config.DB.dialect,
        "logging": false
    },
};

module.exports = db


