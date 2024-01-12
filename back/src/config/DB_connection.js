require('dotenv').config();
const {DB_CONN_STRING} = require('./environment.config');
const {Sequelize} = require('sequelize');
const FavoriteModel = require('../models/Favorite');
const UserModel = require('../models/User');

const sequelize = new Sequelize(DB_CONN_STRING, {
  logging: console.log('Connected to DB...'),
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
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
