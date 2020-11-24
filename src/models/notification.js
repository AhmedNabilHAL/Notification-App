const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const notificationSchema = new mongoose.Schema({
    subject: {
        type: String,
        trim: true,
        required: true
    },
    template: {
        type: String,
        trim: true,
        required: true
    }
});
const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;