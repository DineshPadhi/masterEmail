const cron = require('node-cron')
const configureDetails = require('../config/Config.js');
const nodeMailer = require('nodemailer')

async function providers(name, sub,body) {

    console.log('Cancelled email cron executed')
    // console.log('hiii');
    // console.log('name2===',name);

    let send = nodeMailer.createTransport({
        service:'gmail',
        auth: {
          user:configureDetails.configureDetails.email,
          pass:configureDetails.configureDetails.pass
        }
      });
  
      let mailDetails = {
        from: 'cpkushwaha9833@gmail.com',
        to: name,
        subject: sub,
        text: body
      }
  
    await send.sendMail(mailDetails, (err, data)=>{
    //   console.log('data==',data);
    //   console.log('err==',err);
        if(err){
          console.log('can not send email');
        }
        else{
          console.log('Email send Successfully');
        }
      })
    
}

cron.schedule("0 */2 * * * *", providers);

module.exports = {
    providers
}