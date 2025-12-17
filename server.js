const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('.'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/calculate-bmi', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const heightCm = parseFloat(req.body.height);
  const height = heightCm / 100;     
  const bmi = weight / (height * height);
  res.redirect(`/?bmi=${bmi.toFixed(2)}`);
});

app.listen(3000, () => {
  console.log('Server http://localhost:3000');
});
