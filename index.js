const express = require('express');
const Details = require('./model/Details');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const URI =
    'mongodb+srv://lokesh:f2e8gNkbDyVXBOBe@cluster0.nvt2q6b.mongodb.net/?retryWrites=true&w=majority';

// Middle ware
app.use(express.json());

// Connect to DB
mongoose.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err);
        else console.log('Successfully connect to db');
    }
);

// Get data from db
app.get('/api', async (request, response) => {
    // Product Schema
    try {
        const allDetails = await Details.find();
        response.json(allDetails);
    } catch (error) {
        console.log(error);
    }
});

// Create some data into db
app.post('/api', async (request, response) => {
    // Product Schema
    try {
        const { Name, Price, Quantity } = request.body;
        const allDetails = await Details.create({ Name, Price, Quantity });
        response.json(allDetails);
    } catch (error) {
        console.log(error);
    }
});

// Listening to port 4000
app.listen(PORT, (err) => {
    try {
        console.log(`Server running on port ${PORT} `);
    } catch (error) {
        console.log(err);
    }
});

// f2e8gNkbDyVXBOBe
// mongodb+srv://lokesh:f2e8gNkbDyVXBOBe@cluster0.nvt2q6b.mongodb.net/?retryWrites=true&w=majority
