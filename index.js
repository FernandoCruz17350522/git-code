const express = require('express');
//servidor express
const app = express();
//rutas
app.get('/', (req, res)=>{
    console.log('señor, hemos recibido una petición en /');
    res.json({
        ok:true,
        msg: "acaba de llegar!",
    });
});
//configuracion
app.listen(4000, () => {
    console.log(`Backend corriendo en el puerto ${4000}`);
})