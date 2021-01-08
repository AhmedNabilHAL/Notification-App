const { notification } = require("./NotificationManager");

var nodemailer = require('nodemailer');
const check = (channel) => {

    if(channel === "mail"){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'abdelrahmanashraf25102000@gmail.com',
              pass: 'A25102000a'
            }
          });
          
          var mailOptions = {
            from: 'abdelrahmanashraf25102000@gmail.com',
            to: 'bodyronaldo25@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
}