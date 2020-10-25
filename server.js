const express = require("express");
const socket = require("socket.io");

// App Setup
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`App is listening at http://127.0.0.1:${port}`);
});

//Static Files
app.use(express.static('public'));
