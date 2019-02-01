const express = require('express'),
app = express(),
dotenv = require('dotenv'),
cors = require('cors'),
bodyParser = require('body-parser');

// this line reads all key value pairs in .env folder
dotenv.config(); 

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(cors());

const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY;


var config = {
    apiKey: SECRET_KEY,
    authDomain: "pinterest-clone-taryn.firebaseapp.com",
    databaseURL: "https://pinterest-clone-taryn.firebaseio.com",
    projectId: "pinterest-clone-taryn",
    storageBucket: "pinterest-clone-taryn.appspot.com",
    messagingSenderId: "228241382538"
  };
  firebase.initializeApp(config);









app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`server is listening on ${PORT}...hello!`)
})
