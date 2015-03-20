var Users = require('./userModel').Users;
var User = require('./userModel').User;
var bcrypt = require('bcrypt-nodejs');

module.exports = {
  signup: signup,
  login: login
};

function signup (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var query = new User({username: username});
  var user = new User({username: username, password: password});
  query.fetch()
    .then(function (match) {
      if (match) {
        res.status(400).json({error: 'Username Exists'});
      } else {
        user.save()
          .then(function (model) {
            res.redirect(200, '/');
          });
      }
    });
}

function login (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var user = new User({username: username});
  user.fetch()
    .then(function (match) {
      if (match) {
        bcrypt.compare(password, match.get('password'),
          function (err, result){
            if (result) {
              res.redirect(200, '/');
            } else {
              res.status(400).json({error: 'Bad Username/Password'});
            }
          });
      } else {
        res.status(400).json({error: 'Bad Username/Password'});
      }
    });
}

