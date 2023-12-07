const express = require('express');
const app = express();
const port = 3000;
const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

/*
    To set up a GET route, call app.get
        pass to it two arguments: an endpoint and a middleware function

    app.get(<ENDPOINT>, <MIDDLEWARE FUNCTION>)

    middleware functions should look like this
        function(req, res, next*) {}

    Function call:      greet()     I called the function!
    Callback function:  greet       Something else will call it for me.
    Anonymous callback:
                        function(){}
                        ()=>{}

    Response methods
        res.send()
        res.sendFile()
        res.json()
        res.end()

    Remember that function calls are expressions. They turn into whatever the function returns.

    Getting a random element from an array.
        You will need a random number. How do you get that?
            Math.random()   ->      0-1
        You will need a random number between _ and _ ?
            0 and response.length-1
        This will get a random index based on the length of hte array:
            let rIndex = Math.round(Math.random()*(response.length-1))
        How can we use this number to get the array element?
            response[rIndex]

            That's our random array element.
*/


//==========all routes=========

//--- route 1 ---greetings-----
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}! It's so great to see you!`)
})

//--- route 2 ---Tip Calculator-----
app.get('/tip/:total/:tipPercentage', function (req, res) {
    // res.send(`display how much your tip will be ${req.params.total, req.params.tipPercentage}
    // `);
    function calculateTip (total, tipPercentage) {
        return total * (tipPercentage / 100);
    }
    
    let tip = calculateTip(req.params.total, req.params.tipPercentage)
    res.send(`
        Your total: ${req.params.total}
        Tip rate: ${req.params.tipPercentage}%
        
        Tip amount: ${tip}
    `)
})



//--- route 3 ---Magic 8 Ball-----
app.get('/magic/:question', function(req, res) {
    let rIndex = Math.round(Math.random()*(response.length-1))
    res.send(response[rIndex])
})


//=======run this code so the browser can now ===============
// in terminal type nodemon
app.listen(3000, function() {
    console.log('Listenting on port 3000');
})