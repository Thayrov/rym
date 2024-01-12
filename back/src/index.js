const app = require('./app');
const {PORT, HOST} = require('./config/environment.config');
const {conn} = require('./config/DB_connection');

conn
  .sync({force: true})
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log('Server raised in: http://' + HOST + ':' + PORT);
    });
  })
  .catch(err => {
    console.log(err);
  });
