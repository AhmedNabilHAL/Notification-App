const express = require("express");
const NotificationTemplate = require("../models/NotificationTemplate");
const MemoryNotificationTemplateDataAccessLayer = require("../classes/MemoryNotificationTemplateDataAccessLayer");
const send = require("../classes/NotificationManager");
const router = new express.Router();

const memoryNotifcationTemplateDataAccessLayer = new MemoryNotificationTemplateDataAccessLayer;
router.post("/templates", async (req, res) => {
    
    const template = new NotificationTemplate({
        ...req.body
    })

    if (await memoryNotifcationTemplateDataAccessLayer.addTemplate(template))
        res.status(201).send(template);
    else
        res.status(400).send(e);
})

router.get("/templates", async (req, res) => {
    try{
        const templates = await memoryNotifcationTemplateDataAccessLayer.getTemplates();
        res.send(templates);
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

router.get("/templates/:id", async (req, res) => {
    const _id = req.params.id;
    try{
        const template = await memoryNotifcationTemplateDataAccessLayer.getTemplate(_id);
        console.log(template);
        if (!template) return res.status(404).send();

        res.send(template);
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

router.patch("/templates/:id", async (req, res) => {

    const updates = req.body;
    const allowedUpdates = ["subject", "content", "language"];
    const isValidOperation = Object.keys(updates).every((update) => allowedUpdates.includes(update));
    
    if (!isValidOperation) {
        return res.status(400).send({error: "Invalid updates!" });
    }

    try{
        // const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        // const task = await Task.findById(_id);
        if (await memoryNotifcationTemplateDataAccessLayer.updateTemplate(req.params.id, updates)){
            res.send();
        }
        else{
            return res.status(404).send();
        }
    }
    catch(e){
        res.status(400).send();
    }
});

router.delete("/templates/:id", async (req, res) => {
    try{
        if (await memoryNotifcationTemplateDataAccessLayer.deleteTemplate(req.params.id))
            return res.status(200).send();

        return res.status(404).send();
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.post("/templates/search", async (req, res) => {
    try{
        const templates = await memoryNotifcationTemplateDataAccessLayer.searchTemplates(req.body["searchCriteria"], req.body["searchTerm"]);
        res.send(templates);
    }
    catch (e){ 
        res.status(500).send(e);
    }
})

router.post("/notifications/send", async (req, res) => {
    try{
        
        const requiredKeys = ["templateId", "placeholders", "address", "channel"];
        const valid = true;
        requiredKeys.forEach((key) => {
            if (!(key in req.body)) valid = false;
        });

        if (!valid) return res.status(400).send({error: "missing paramaters!"});
        if (!(req.body["channel"] === "mail" || req.body["channel"] === "SMS")) return res.status(400).send({error: "wrong channel!"});
        
        const _id = req.body["templateId"];
        const template = await memoryNotifcationTemplateDataAccessLayer.getTemplate(_id);
        if (!template) return res.status(404).send("template not found!");
        
        const notification = send({
            template,
            placeholders: req.body["placeholders"],
            address: req.body["address"],
            channel: req.body["channel"]
        })
        console.log(notification);
        if (notification.error) return res.status(notification.errorCode).send(notification);
        res.status(200).send(notification);
    }
    catch(e){
        res.status(400).send(e);
    }
})
// module.exports = router;
module.exports = {
    router
};