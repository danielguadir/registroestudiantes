const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para parsear datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el formulario de registro
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta para procesar el registro
app.post('/registro', (req, res) => {
  const { nombre, edad, email, curso } = req.body;

  // Renderizar la página de confirmación con los datos
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación de Registro</title>
    </head>
    <body>
      <h1>Registro Exitoso</h1>
      <p><strong>Nombre Completo:</strong> ${nombre}</p>
      <p><strong>Edad:</strong> ${edad}</p>
      <p><strong>Correo Electrónico:</strong> ${email}</p>
      <p><strong>Curso:</strong> ${curso}</p>
    </body>
    </html>
  `);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

