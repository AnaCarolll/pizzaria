
const pizza = require('../database/pizza.json')

const  PizzasController ={
     listar:(req, res)=>{
     res.render('pizzas.ejs', {pizza})

     }
};
module.exports = PizzasController;

