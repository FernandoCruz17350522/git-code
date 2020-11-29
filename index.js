const express = require('express');
//monitorear las variables de entorno(todas las variables)
require('dotenv').config();
const app = express();
//aceso al directorio publico
app.use(express.static('public'));
//rutas
app.use('/api/auth', require('./routes/auth'));
//configuracion
app.listen(process.env.PORT, () => {
    console.log(`Backend corriendo en el puerto ${process.env.PORT}`);
})