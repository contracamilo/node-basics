//require('dotenv').config();
require('dotenv-flow').config();

const config = {
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbLocal: process.env.DB_LOCAL
};

module.exports = { config };

// CONFIG

