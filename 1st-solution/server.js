const express = require('express');
const fs = require('fs');
const app = express();

app.get('/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the file');
      return;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
