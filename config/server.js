/* importar o modulo do framework express*/
const express = require('express');
/* importar o modulo do framework consign*/
// vai adicionar as routas do sistema de forma automatica
const consign = require('consign');
/* importar o modulo do framework body-parse */
// permite receber paramentros do <form></form>
const bodyParser = require('body-parser');
/* importar o modulo do framework express-validator*/
// validar os inputs - expressao regular
const expressValidator = require('express-validator');

/* instanciando o express */ 
const app = express();

/* setar as variaveis para usar as views */
app.set('view engine', 'ejs');

// definir o padro do caminho das views 
app.set('views','./app/views');

/* implementando o middleware body-parse */
app.use(bodyParser.urlencoded({extended: true}));

// middleware de validacao
app.use(expressValidator());

/* middleware express.static */
// mapeando os ficheiros staticos (css, js, img)
app.use(express.static('./app/public'));

/* efetua o autoload das rotas, dos models e dos controllres p
ara o objecto app */
consign()
     .include('app/routes')
     .then('config/dbConnection.js')
     .then('app/models')
     .then('app/controllers')
     .into(app);

/* exportar o objecto app  */
module.exports = app;


/* utilizamos o use para especificar que vamos usr um middleware */
/* utilizamos o set para definir paramentros  */