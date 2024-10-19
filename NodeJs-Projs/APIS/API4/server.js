// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

let usuarios = [];




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/signup', (req, res) => {
  const { nick, email, password } = req.body;
  usuarios.push({ nick, email, password });
  res.redirect('/signedin');
});

app.get('/signedin', (req, res) => {
  const lastUser = usuarios[usuarios.length - 1];
  
  res.send(`
    <h1>¡Bienvenido!</h1>
    <p>Usuario: ${lastUser.nick}</p>
    <p>Email: ${lastUser.email}</p>
    <p>Password: ${lastUser.password}</p>
    <a href="/">Volver</a>
  `);
});

mongoose.connect('mongodb+srv://user1:Welcome1@clusterscl-v1.pgro472.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSCL-v1', { useNewUrlParser: true, ____



app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
