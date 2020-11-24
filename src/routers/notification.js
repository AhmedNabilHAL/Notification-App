const express = require("express");
const Notification = require("../models/notification");

const router = new express.Router();

router.post("/notifications", async (req, res) => {

    const notification = new Notification({
        ...req.body
    })

    try{
        await notification.save();
        res.status(201).send(notification);
    }
    catch(e){
        res.status(400).send(e);
    }
    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch(error => {
    //     res.status(400).send(error);
    // })
})

router.get("/notifications", async (req, res) => {
    try{
        const notifications = await Notification.find({});
        res.send(notifications);
    }
    catch (e){ 
        res.status(500).send(e);
    }
    // Task.find({}).then(tasks => {
    //     res.send(tasks);
    // }).catch(error => {
    //     res.status(500).send(error);
    // })
})

router.get("/notifications/:id", async (req, res) => {
    const _id = req.params.id;
    try{
        const notification = await Notification.findOne({ _id });
        if (!notification) return res.status(404).send();

        res.send(notification);
    }
    catch(e){
        res.status(500).send(e);
    }
    // Task.findById(_id).then(task => {
    //     if (!task){
    //         return res.status(404).send();
    //     }

    //     res.send(task);
    // }).catch(error => {
    //     res.status(500).send(error);
    // })
})

router.patch("/notifications/:id", async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ["template", "subject"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    
    if (!isValidOperation) {
        return res.status(400).send({error: "Invalid updates!" });
    }

    try{
        // const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        // const task = await Task.findById(_id);
        const notification = await Notification.findOne({ _id: req.params.id });
        if (!notification) return res.status(404).send();
        updates.forEach((update) => notification[update] = req.body[update]);
        await notification.save();

        res.send(notification);
    }
    catch(e){
        res.status(400).send();
    }
});

router.delete("/notifications/:id", async (req, res) => {
    try{
        const notification = await Notification.findOneAndDelete({ _id: req.params.id });
        if (!notification) return res.status(404).send();

        res.send(notification);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;