const express = require('express');
const { json } = require('express/lib/response');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use('/',require('./Routers/router'))

app.listen(3000, ()=>{
      console.log('Servidor corriendo en http://localhost:3000');
})