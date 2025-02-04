const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST Route
app.post("/", (req, res) => {
    res.json({ message: "Server is running" });
});

// Server Listening
const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
