const { Template } = require("./Template");

class CancelBooking extends Template
{
    makeContent(action , placeholders)
    {
        let content = "Dear "+placeholders[0]+", your booking has been cancelled";
        this.setContent(content);
        console.log(content);
    }
}