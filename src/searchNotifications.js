require ("./db/mongoose");
const Notification = require("./models/Notification");

const searchNotifications = async (channel, address) =>{
    console.log(channel, address);
    if (!channel || !address) return console.log("invalid arguments");
    try{
        const notifications = await Notification.find({channel: channel, address: address, sentStatus: true}).sort("_id");
        console.log(notifications);
    }
    catch (e){ 
        console.log(e);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter channel `, (channel) => {
    rl.question(`Enter address `, (address) => {
        searchNotifications(channel, address);

        rl.close();
    });

});