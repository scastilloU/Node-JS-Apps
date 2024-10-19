// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

let resultadoGlobal = null;

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para procesar los datos del formulario
app.post('/operar', (req, res) => {
  const { num1, num2, operacion } = req.body;

  switch (operacion) {
    case 'sumar':
      resultadoGlobal = parseFloat(num1) + parseFloat(num2);
      break;
    case 'restar':
      resultadoGlobal = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiplicar':
      resultadoGlobal = parseFloat(num1) * parseFloat(num2);
      break;
    case 'dividir':
      resultadoGlobal = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      resultadoGlobal = null;
  }

  res.redirect('/resultado');
});

// Ruta para mostrar el resultado
app.get('/resultado', (req, res) => {
  if (resultadoGlobal !== null) {
    res.send(`El resultado es: ${resultadoGlobal}<br><br><a href="/">Volver</a>`);
  } else {
    res.send('Operación no válida.<br><br><a href="/">Volver</a>');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
