// 1st step require all the packages you install

const express = require('express');

// create variable app which is our express app in the core
const app = express();

// routes:

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
});

// /about is what we see in the URL 
app.get('/about', (req, res, next) => {

    // here we need to navigate to the file itself, so physical path goes here 
    res.sendFile(__dirname + '/views/about.html');
});




app.listen(3000, () => console.log("My express app runs port 3000."))

