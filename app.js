const express = require('express');

// Create Express app
const app = express();

// A sample route
app.get('/', (req, res) => res.send('Hello World...!'));

// Start the Express server
const serverPort = 80;

app.listen(serverPort, () => console.log(`Server running on port ${serverPort}`));