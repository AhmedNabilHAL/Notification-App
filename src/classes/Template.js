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
}
module.exports.Template = Template;