module.exports = class Responses {
    constuctor() {
      //
    }
    async success(res,result) {
        console.log('inside succedsss');
      return await res.status(200).json({ success: true, data: result, message: "ok" });
    }
  
    async error(res,err) {
        console.log('inside eror');
      return await res.status(400).json({ success: false, error: err, message: "error occured" });
    }
  };