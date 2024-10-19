const express = require('express');
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const app = express();

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Configurar el middleware para analizar los datos del formulario
app.use(express.urlencoded({ extended: false }));

// Ruta para mostrar el formulario de envío de correo
app.get('/', (req, res) => {
  res.render('index');
});

// Ruta para procesar el formulario y enviar el correo
app.post('/send', (req, res) => {
  const { to, subject, message } = req.body;

  // Configurar el transporte SMTP para enviar el correo
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tu_correo@gmail.com',
      pass: 'tu_contraseña',
    },
  });

  // Configurar los detalles del correo
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to,
    subject,
    html: `<p>${message}</p>`,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Correo enviado correctamente');
    }
  });
});

// Iniciar el servidor
app.listen(8888, () => {
  console.log('Servidor iniciado en el puerto 8888');
});
