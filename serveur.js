const express = require('express');

const app = express ();
const PORT = 4000 ; 
app .listen(PORT, () => console.log(`serveur running on port 4000`));
const timeCheckMiddleware = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
        next(); 
    } else {
        res.send('Sorry, we are closed .');
    }
};


app.use(express.static('public'));


app.use(timeCheckMiddleware);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});
