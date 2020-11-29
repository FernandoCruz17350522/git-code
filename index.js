const express = require('express');
//monitorear las variables de entorno(todas las variables)
require('dotenv').config();

//servidor express
const app = express();



//aceso al directorio publico
app.use(express.static('public'));



//rutas
/*app.get('/', (req, res)=>{
    res.json({
        ok:true,
        msg: "acaba de llegar!",
    });
});*/
//configuracion
app.listen(process.env.PORT, () => {
    console.log(`Backend corriendo en el puerto ${process.env.PORT}`);
})