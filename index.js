const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", function(req, res) {
    var fullData = new Date();
    var day = 1
    var mess = ""
    if (day === 1) {
        var printMe = "Monday"
    }
    if (day === 2) {
        var printMe = "Tuesday"
    }
    if (day === 3) {
        var printMe = "Wednesday"
    }
    if (day === 4) {
        var printMe = "Thursday"
    }
    if (day === 5) {
        var printMe = "Friday"
    }
    if (day === 6) {
        var printMe = "Saturday"
    }
    if (day === 7) {
        var printMe = "Sunday"
    }

    // 2nd way
    switch (day) {
        case 0:
            mess = "sunday"
            break;
        case 1:
            mess = "Monday  "
            break;
        case 2:
            mess = "Tuesday"
            break;
        case 3:
            mess = "Wednesday"
            break;
        case 4:
            mess = "Thursday"
            break;
        case 5:
            mess = "Friday"
            break;
        case 6:
            mess = "Saturday"
            break;
        default:
            break;
    }
    res.render("list", { fab: mess })
})
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started successfully")
})