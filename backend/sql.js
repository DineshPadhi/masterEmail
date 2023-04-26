const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost:3306',
      user : 'root',
      password : 'pranay1234',
      database : 'MasterEmail'
    }
  });