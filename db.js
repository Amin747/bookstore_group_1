const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/bookDb",
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (!err) console.log("Successfully connect to MondoDB...");
        else
            console.log(
                "Connection to MongoDb failed :"
                + JSON.stringify(err, undefined, 2)
            );
    });


module.exports = mongoose;