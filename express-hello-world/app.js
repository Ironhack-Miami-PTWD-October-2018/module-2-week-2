// 1. require all the installed packages

//   name you give	   name of the package you installed
//       |                  |
const express = require('express');

const app = express();

// Connect "public/" folder to our express app
app.use(express.static('public'));


//      '/' => means localhost:3000
//       ^
//       |   callback function as 2nd argument
app.get('/', (request, response, next) => {
    // console.log("Something here will be displayed in the browser.");
    // response.send('<p>Hello there, <b>Ironhackers<b>!!!<p>');

    response.sendFile(__dirname + '/views/home.html');
});

// GET sends the data to the client (in this case the browser) to be displayed to the users
app.get('/cat', (req, res, next) => {
    // res.send('<img width="300" src="/images/cool-cat.jpg">');
    res.sendFile(__dirname + '/views/cat.html');
})

app.listen(3000, () => {
    console.log("My first express app running on port 3000 ❤️")
});