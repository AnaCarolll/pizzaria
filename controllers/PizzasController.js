
const pizzas = require('../database/pizza.json')

const  PizzasController ={
     listar:(req, res)=>{
     res.render('pizzas.ejs', {pizzas})
    },
      mostar:(req, res)=>{
           let id = req.params.id;
           let pizza = pizzas.find(p=>p.id==id);
          res.render('pizzas.ejs', {pizzas})
       
     }


};  
module.exports = PizzasController;

