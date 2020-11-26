const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const templateSchema = new mongoose.Schema({
    action: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    placeholders: [{
        type: String,
        trim: true,
        required: true
    }]
});
const Template = mongoose.model("Template", templateSchema);
module.exports = Template;