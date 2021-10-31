const port = process.env.SERVER_PORT || 8080;

// import the express package
const express = require('express');

// creates an express app
const app = express();

// creates static routes
const path = require('path');
app.use(express.static(path.join(__dirname, "/public")));

// start the server
app.listen(port, function (err) {
    if (!err) {
        console.log('Server is running');
    }
    else {
        console.log(err);
    }
});

// export the app
module.exports = app;