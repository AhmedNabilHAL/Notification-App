const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const NotificationTemplate = require("./NotificationTemplate")
const notificationSchema = new mongoose.Schema({
    address: {
        type: String,
        trim: true,
        required: true
    },
    channel:{
        type: String,
        trim: true,
        required: true
    },
    notification:{
        _id: {
            type: String
        },
        subject: {
            type: String
        },
        content: {
            type: String
        },
        language: {
            type: String
        }
    }
});
const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;