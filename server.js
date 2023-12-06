const express = require('express');
const app = express();
const port = 3000;

//==========all routes=========

//---greetings-----
app.get('/greeting/:name', (req, res) => {
    res.send(`
    Hello, ${req.params.name}! It's so great to see you!`
)})


//=======run this code so the browser can now ===============
// in terminal type nodemon
app.listen(3000, function() {
    console.log('Listenting on port 3000');
})