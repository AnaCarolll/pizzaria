const express = require('express');
const app = express();
const porta = 3000; 
const PizzaRouter= require ('./router/PizzaRouter')
app.get('/', (req,res) => {
    res.send('óla, visitante!')
} )




app.use('/', PizzaRouter);




















app.listen(porta)