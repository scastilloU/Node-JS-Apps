const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API Funcionando');
});

app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 + num2;
  res.json({ resultado });
});

app.post('/restar', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 - num2;
  res.json({ resultado });
});

app.post('/multiplicar', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = num1 * num2;
  res.json({ resultado });
});

app.post('/dividir', (req, res) => {
  const { num1, num2 } = req.body;
  if (num2 === 0) {
    return res.status(400).json({ error: 'No se puede dividir por cero' });
  }
  const resultado = num1 / num2;
  res.json({ resultado });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
