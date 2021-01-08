let notificationQueueEmail = [], notificationQueueSMS = [];
const Notification = require("../models/Notification");
const populateQueues = async () =>{
    try{
        notificationQueueSMS = await Notification.find({channel:"SMS"}).sort("_id");
        notificationQueueEmail = await Notification.find({channel:"mail"}).sort("_id");
    }
    catch(e){
        console.log(e);
    }
}
const send = (body) => { // enqueue
    const placeholders = body.placeholders;
    const template = body.template;
    const channel = body.channel;
    const address = body.address;
    
    let str = template.content;
    
    const missingPlaceholder = [];
    str = str.replace(/\{\w+\}/g, (all) => {
        if (!placeholders[all]) missingPlaceholder.push(all);
        return placeholders[all] || all;
    });
    if (missingPlaceholder.length > 0) return {
        errorCode: 400,
        error: `missing placeholders: ${missingPlaceholder}`
    }

    template.content = str;
    const notification = new Notification({
        address,
        channel,
        notification: template
    });
    notification.save();
    if (channel === "mail"){
        /* We must check if the notification is worked or not */
        notificationQueueEmail.push(notification)
    }
    else{
        notificationQueueSMS.push(notification);
    }
    console.log(notificationQueueEmail, notificationQueueSMS);
    return notification;
}


module.exports = {send, populateQueues};