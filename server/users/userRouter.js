var userController = require('./userController');

module.exports = function (app) {

  app.post('/signup', userController.signup);
  app.post('/login', userController.login);
  
};
