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

<<<<<<< HEAD
  knex('TemplateData').select('*')
=======
knex('TemplateData').select('*')
>>>>>>> 07db44b697e6528f9b8d6d6763d58ba0b9708e9a
  .then(rows => {
    console.log(rows);
  })
  .catch(err => {
    console.error(err);
<<<<<<< HEAD
  });
=======
  });
>>>>>>> 07db44b697e6528f9b8d6d6763d58ba0b9708e9a
