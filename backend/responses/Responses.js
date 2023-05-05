module.exports = class Responses {

    constuctor() {
<<<<<<< HEAD
=======
  
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
    }

     success(res,result) {
      return  res.status(200).json({ success: true, data: result, message: "ok" });
    }
  
    error(res,err) {
      return  res.status(400).json({ success: false, error: err, message: "error occured" });
    }
    
  };