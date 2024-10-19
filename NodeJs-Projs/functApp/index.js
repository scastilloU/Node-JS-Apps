const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/name', (req, res) => {
  const name = req.body.name;
  fs.writeFileSync(__dirname + '/public/output.html', `<p>Hello, ${name}!</p>`);
  res.send({ name: name });
});

app.post('/age', (req, res) => {
  const age = req.body.age;
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;
  fs.appendFileSync(__dirname + '/public/output.html', `<p>Your birth year is ${birthYear}.</p>`);
  res.send({ birthYear: birthYear });
});

const port = 3333;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
