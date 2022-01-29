
const express = require("express");
const cors = require("cors");
const favicon = require('express-favicon');

const routes = require('./src/routes');


// Create Express Server
const app = express();


app.use(cors());
app.use(express.json());


app.use(favicon(__dirname + '/public/favicon.ico'));

// Configuration
const PORT = process.env.PORT || 3000;

app.use(routes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on Port: ${PORT}`);
});
