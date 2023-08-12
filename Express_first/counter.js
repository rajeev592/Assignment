const express = require('express');

const app = express();

const PORT = 4546;
const HOSTNAME = 'localhost';

// Initialize Counter

let counter = 0;

// Middleware to parse JSON in request body
app.use(express.json());

// Get current counter data
app.get('/', (req, res) => {
    res.json({counter: counter });
});

// Increment counter
app.post('/increment', (req, res) => {
    counter++;
    res.json({counter: counter });
});

// decrement counter
app.post('/decrement', (req, res) => {
    counter--;
    res.json({counter: counter });
});

app.listen(PORT, () => {
    console.log(`Server is running on${HOSTNAME}:${PORT}`);
})