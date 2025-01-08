// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port to listen on
const PORT = 7200;

// Handle a GET request to the root URL
app.get('/', (req, res) => {
    res.send('Hello, World! This is a GET request.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
