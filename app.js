let express = require( 'express' );
let morgan = require ('morgan');
let app = express(); 

/*
function logueo(req, res, next) {
    console.log('ESTA ES LA PETICION' + ' ' +req.method + ' ' + req.originalUrl);
    res.send('ESTA ES LA RESPUESTA')

    next();
    // llamá a `next()`. Sino tu app recibirá pedidos 
    // pero no responderá adecuadamente.
}

app.use('/', logueo);
*/


app.use(morgan('tiny'));

app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
    console.log('Servidor iniciado')
    
});

