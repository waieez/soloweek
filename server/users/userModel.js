var db = require('.././db/db');
var bcrypt = require('bcrypt-nodejs');

db.knex.schema.hasTable('users').then(function (exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  initialize: function () {
    var context = this;
    var password = context.get('password');
    if (password) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, null, function (err, hash) {
          context.set('password', hash);
          console.log('shouldhave hashed pw: ', context.get('password'));
        });
      });
    }
  }
});

var Users = new db.Collection();
Users.model = User;

module.exports.User = User;
module.exports.Users = Users;
