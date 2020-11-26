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
            console.log("before save");
            await template.save();
            console.log("after save");
        }
        catch(e){
            console.log("error in save");
            console.log(e);
        }
    }
}
console.log("hello world");
const newtemplate = new Template("new entry", ["username", "password", "and so on"], "this is content {username}, {password}, {so on}");
console.log(newtemplate.getPlaceholders());
newtemplate.save();
module.exports.Template = Template;