require ("../db/mongoose");
const NotificationTemplate = require("../models/NotificationTemplate");

class MemoryNotifcationTemplateDataAccessLayer
{
    async getTemplates(){
        const templates = await NotificationTemplate.find({});
        console.log(templates);
        return templates
    }

    async addTemplate(template){
        try{
            await template.save();
            return true;
        }
        catch(e){
            console.log(e);
            return false;
        }
    }

    async deleteTemplate(templateId){
        const template = await NotificationTemplate.findOneAndDelete({ _id: templateId });
        if (!template) return false;
        console.log("DELETED!");
        console.log(template);
        return true;
    }

    async updateTemplate(templateId, updates){
        const template = await NotificationTemplate.findOne({ _id: templateId });
        console.log(template);
        console.log(updates);
        if (!template) return false;
        Object.keys(updates).forEach((update) => template[update] = updates[update]);
        await template.save();
        return true;
    }

    async getTemplate(templateId){
        const template = await NotificationTemplate.findOne({ _id: templateId });
        console.log(template);
        return template;
    }

    async searchTemplates(searchCriteria, searchTerm){
        const validCriteria = ["subject", "content", "language"]

        if (!validCriteria.includes(searchCriteria)) return [];
        console.log(searchCriteria, searchTerm);
        const templates = await NotificationTemplate.find({[searchCriteria]: { $regex: '.*' + searchTerm + '.*', $options: 'i'}});
        console.log(templates);
        return templates;
    }
}

module.exports = MemoryNotifcationTemplateDataAccessLayer;