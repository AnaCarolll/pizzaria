const express = require('express');
const app = express();
const porta = 3000; 
const PizzaRouter= require ('./router/PizzaRouter')
app.get('/', (req,res) => {
    res.send('óla, visitante!')
} )

const path = require ('path')
app.set('view engrine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', PizzaRouter);




















app.listen(porta)