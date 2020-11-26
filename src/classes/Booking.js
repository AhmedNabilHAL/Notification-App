class BookingConfirmMail extends Template
{
    makeContent(action , placeholders)
    {
        let content = "Dear "+placeholders[0]+", your booking of the "+placeholders[1]+" is confirmed. Thanks for using our store";
        this.setContent(content);
        console.log(content);
    }
}