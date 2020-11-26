class ForgotPassword extends Template
{
    makeContent(action , placeholders)
    {
        let content = "Dear "+placeholders[0]+", press the following link to reset your password";
        this.setContent(content);
        console.log(content);
    }
}