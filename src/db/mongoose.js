const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});