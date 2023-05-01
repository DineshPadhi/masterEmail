module.exports = class Responses {
    constuctor() {
      //
    }
     success(res,result) {
      return  res.status(200).json({ success: true, data: result, message: "ok" });
    }
  
    error(res,err) {
      return  res.status(400).json({ success: false, error: err, message: "error occured" });
    }
  };