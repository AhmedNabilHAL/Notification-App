const { Template } = require("./Template");

class Main
{
    createTemplate(action , placeholders , content)
    {
        let obj = new Template(action , placeholders , content);
    }
    printTemplates(templates)
    {
        for(var i=0 ; i<templates.length ; i++)
        {
            console.log(templates[i].getAction());
            console.log(templates[i].getPlaceholders());
            console.log(templates[i].getContent());
        }
    }
}