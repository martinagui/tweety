const express = require( 'express' );
const morgan = require('morgan'); //middleware application logger
let routes = require('./routes');
const nunjucks = require( 'nunjucks' );

const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan('tiny'))



/*
app.get('/', function (req, res) {
    res.render( 'index', { tweets: tweetsDeEjemplo });
});
*/

app.use('/', routes);

app.use(express.static('./public'))

app.listen(3000, function(){
    console.log('Estas escuhando en el puerto 3000')
});



