class RegisteritionConfirmMail extends Template
{
    makeContent(action , placeholders)
    {
        let content = "Dear "+placeholders[0]+", press the following link to confirm your registerition";
        this.setContent(content);
        console.log(content);
    }
}