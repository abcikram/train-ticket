const express = require("express")
const bodyParser = require("body-parser")
const route = require("./route/route")
const mongoose = require('mongoose');
const app = express();



app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://PradeepPatil:vp0T2toXsM1QqQAo@cluster0.h3sgz2m.mongodb.net/My-ticket", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)

app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
})

