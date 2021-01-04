class Notification{
    constructor(address, notification){
        this.address = address;
        this.notification = notification;
    }

    getAddress(){
        return this.address;
    }

    getNotification(){
        return this.notification
    }
}

module.exports = Notification;