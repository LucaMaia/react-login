const express = require('express');
const cors = require('cors')
const routes = require('./routes')
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Rotas
app.get('/', function (req,res){
   res.send('Hello World!');
})

app.listen(4000,function (){
    console.log('Servidor Rodando!')
})

