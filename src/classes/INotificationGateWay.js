const { notification } = require("./NotificationManager");

const check = (notification) => {
  const error = Boolean(Math.round(Math.random()));
  if (error) {
        console.log("Failed sent");
        return false;
      }
    console.log('Email sent');
    return true;
}
module.exports = {check}