const express = require('express');

const app = express();

const PORT = 4546;
const HOSTNAME = 'localhost';


// Middleware to parse JSON in request body
app.use(express.json());

// Define Routes
app.get('/', (req, res) => {
    res.json({msg: 'I am homepage' });
});


app.get('/about', (req, res) => {
    
    res.json({msg: 'I am about page' });
});


app.get('/contact', (req, res) => {
    
    res.json({email: 'support@pwskills.com' });
});

app.listen(PORT, () => {
    console.log(`Server is running on${HOSTNAME}:${PORT}`);
})