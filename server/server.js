const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 1111;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));