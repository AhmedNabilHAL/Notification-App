const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const templateSchema = new mongoose.Schema({
    subject: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    language: {
        type: String,
        trim: true,
        required: true
    }
});
const NotificationTemplate = mongoose.model("NotificationTemplate", templateSchema);
module.exports = NotificationTemplate;