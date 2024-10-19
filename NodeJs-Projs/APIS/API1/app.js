const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Configurar bodyParser para parsear solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la solicitud del formulario de usuario
app.post('/api/usuario', (req, res) => {
    // Obtener datos del formulario
    const { nombre, edad } = req.body;
    
    // Enviar respuesta al cliente
    res.send(`
        <html>
        <head>
            <title>Formulario de Usuario</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="container">
                <h1>Datos del Usuario</h1>
                <p>Nombre: ${nombre}</p>
                <p>Edad: ${edad}</p>
                <p>Edad: ${email}</p>
            </div>
        </body>
        </html>
    `);
});

// Configurar el puerto de escucha
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
