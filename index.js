const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

app.use(express.static(path.resolve(__dirname, 'build')));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});
