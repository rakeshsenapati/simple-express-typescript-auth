const dotenv = require('dotenv')
const environment = process.env.NODE_ENV || 'development';
if (environment.trim() === 'development') {
  dotenv.config({ path: '.env.development' });
} else {
  dotenv.config({ path: '.env.production' });
}

const config = {
  DB: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
  PORT: process.env.PORT,
  REDIS_URL: process.env.REDIS_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  ENVIRONMENT: environment
}

module.exports = config