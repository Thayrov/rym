require('dotenv').config({
  path: process.argv[2] === 'development' ? './.env.development' : './.env.production',
});

let environment = {MODE: process.env.TEST_MODE || process.argv[2]};
const {MODE} = environment;

if (!['development', 'production'].includes(MODE)) {
  console.error('You are not selecting a valid environment');
  process.exit();
}

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
