const knex = require('knex')({
  client:"mysql2" ,
  connection: {
      host:"localhost",
      user:"root",
      password:"Admin@123",
      port:"3306",
      database:"MasterEmail"
  }
})

knex('TemplateData').select('*')
  .then(rows => {
    console.log(rows);
  })
  .catch(err => {
    console.error(err);
  });