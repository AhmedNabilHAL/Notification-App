const { notification } = require("./NotificationManager");

const check = (notification) => {
    const error = Math.random()%2;
    if (error) {
        console.log("Failed sent");
        return false;
      } else {
        console.log('Email sent');
        return true;
      }
}
module.exports = {check}