const express = require('express'),
app = express(),
cors = require('cors'),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors());

const PORT = process.env.PORT || 8080;



app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...hello!`)
})
