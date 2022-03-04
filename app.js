const express = require('express');
const app = express();
const porta = 3000; 
app.get('/', (req,res) => {
    res.send('óla, visitante!')
} )

const PizzaRouter= require ('./router/PizzaRouter')























app.listen(porta)