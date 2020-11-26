require ("../db/mongoose");
const TemplateDB = require("../models/template");
class Template
{
    constructor(action , placeholders , content){
        this.action = action;
        this.placeholders = placeholders;
        this.content = content;
    }

    setAction(action){
        this.action = action;
    }
    getAction(){return this.action};

    setPlaceholders(placeholders){
        this.placeholders = placeholders;
    }
    getPlaceholders(){return this.placeholders};

    setContent(content){
        this.content = content;
    }
    getContent(){return this.content};

    
    makeContent(action , placeholders){};
    async save(){
        const template = new TemplateDB({
            "action": this.getAction(),
            "content": this.getContent(),
            "placeholders": this.getPlaceholders()
        })
    
        try{
            await template.save();
        }
        catch(e){
            console.log(e);
        }
    }
}

module.exports.Template = Template;