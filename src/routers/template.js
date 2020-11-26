const express = require("express");
const Template = require("../models/template");

const router = new express.Router();

router.post("/templates", async (req, res) => {
    
    const template = new Template({
        ...req.body
    })

    try{
        await template.save();
        res.status(201).send(template);
    }
    catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})

router.get("/templates", async (req, res) => {
    try{
        const templates = await Template.find({});
        console.log(templates);
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
        const template = await Template.findOne({ _id });
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

    const updates = Object.keys(req.body);
    const allowedUpdates = ["action", "content", "placeholders"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    
    if (!isValidOperation) {
        return res.status(400).send({error: "Invalid updates!" });
    }

    try{
        // const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        // const task = await Task.findById(_id);
        const template = await Template.findOne({ _id: req.params.id });
        if (!template) return res.status(404).send();
        updates.forEach((update) => template[update] = req.body[update]);
        await template.save();
        console.log(template);
        res.send(template);
    }
    catch(e){
        res.status(400).send();
    }
});

router.delete("/templates/:id", async (req, res) => {
    try{
        const template = await Template.findOneAndDelete({ _id: req.params.id });
        if (!template) return res.status(404).send();
        console.log("DELETED!");
        console.log(template);
        res.send(template);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;