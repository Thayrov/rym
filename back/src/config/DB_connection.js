require('dotenv').config();
const {DB_CONN_STRING} = require('./environment.config');
const {Sequelize} = require('sequelize');
const FavoriteModel = require('../models/Favorite');
const UserModel = require('../models/User');

let dialectOptionsByEnv = {};

if (process.env.TEST_MODE === 'development' || process.argv[2] === 'development') {
  dialectOptionsByEnv = {};
} else if (process.argv[2] === 'production') {
  dialectOptionsByEnv = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(DB_CONN_STRING, {
  logging: console.log('Connected to DB...'),
  native: false,
  dialectOptions: dialectOptionsByEnv,
});

FavoriteModel(sequelize);
UserModel(sequelize);

const {User, Favorite} = sequelize.models;

Favorite.belongsToMany(User, {through: 'user_favorite'});
User.belongsToMany(Favorite, {through: 'user_favorite'});

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
