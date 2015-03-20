var dbConfig = {
  client: 'sqlite3',
  connection: {
    filename: './server/db/db.sqlite',
    host: '127.0.0.1',
    user: '',
    password: '',
    database: 'test',
    charset: 'utf8'
  }
};

var knex = require('knex')(dbConfig);

var db = require('bookshelf')(knex);

module.exports = db;