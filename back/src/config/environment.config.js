require('dotenv').config();

const {
  PORT,
  HOST,
  URL,
  API_KEY,
  FALLBACK_URL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_CONN_STRING,
} = process.env;

environment = {
  PORT,
  HOST,
  URL,
  API_KEY,
  FALLBACK_URL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_CONN_STRING,
};

module.exports = {
  ...environment,
};
