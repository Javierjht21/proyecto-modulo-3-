// app.js

require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Asegúrate de que la ruta es correcta

// Middleware para parsear JSON (necesario para manejar datos en formato JSON)
app.use(express.json());

// Usamos las rutas de usuarios
app.use('/api', userRoutes);

// Escuchar en un puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

