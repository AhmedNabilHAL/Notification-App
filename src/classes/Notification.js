const notificationQueue = [];
class Notification{
    constructor(to, notificationTemplate){
        this.to = to;
        this.notificationTemplate = notificationTemplate;
    }

    add(){
        notificationQueue.push(this);
    }
}

const send = () => {
    if (notificationQueue.length > 0){
        const emailContent = notificationQueue[0];
        // send email using emailContent.to, emailContent.notificationTemplate
        notificationQueue.shift();
    }
}

module.exports = {
    Notification,
    send
}