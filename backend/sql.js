const knex = require('knex')({
  client:"mysql2" ,
  connection: {
      host:"localhost",
      user:"root",
      password:"Admin@123",
      port:"3306",
      database:"Member"
  }
})

  knex('members').select('*')
  .then(rows => {
    console.log(rows);
  })
  .catch(err => {
    console.error(err);
  });
