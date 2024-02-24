//Cargar express
const express = require('express');

//Crear un servidor express
const app = express();

//Mensaje de hola en home
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

//Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});