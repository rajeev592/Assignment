const express = require('express');

const app = express();

const PORT = 4546;
const HOSTNAME = 'localhost';


// Middleware to parse JSON in request body
app.use(express.json());

// Define a Route to generate a random number
app.get('/random', (req, res) => {
    const randomNum = Math.floor(Math.random() * 100) +1;
    res.json({random: randomNum });
});


app.listen(PORT, () => {
    console.log(`Server is running on${HOSTNAME}:${PORT}`);
})