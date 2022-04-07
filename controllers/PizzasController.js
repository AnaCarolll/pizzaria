
//const express = require('express');
const pizzas = require('../database/pizza.json')

const PizzasController = {
     listar: (req, res) => {
          res.render('pizzas.ejs', { pizzas, busca:'' });
     },


     mostrar: (req, res) => {
          //- Declare duas variáveis: idProxima e idAnterior
          let idProxima = null;
          let idAnterior = null;
          //- Capture o id da pizza a partir da URL na variável id 
          //(Esse passo já foi dado... req.params.id)
          var id = req.params.id;

          //  - Determine a posição da pizza que tem o id desejado (Dica: Use a função findIndex) e guarde na variável posicao
          let posicao = pizzas.findIndex(p=>p.id == id);

          //- Guarde a pizza da posicao encontrada na variável pizza
          let pizza = pizzas.find(p => p.id == id);

          //- Se a posição da pizza encontrada for a última do array, idProxima deve receber o id da primeira pizza
          //- Caso contrário, idProxima deve ter o id da pizza da posição seguinte
          if (posicao == pizzas.length - 1) {
               idProxima = pizzas[0].id
          } else {
               idProxima = pizzas[posicao +1].id
          };
          //- Se a posição da pizza envontrada for a primeira do array, o idAnterior deve receber o id da última pizza
          //- Caso controário, idAnterior deve receber o id da pizza na posição anterior.

         if(posicao ==  0){ 
               idAnterior = pizzas[pizzas.length -1].id;
         }else{
              idAnterior = pizzas[posicao -1].id;
         };




res.render('pizza.ejs',{pizza, idAnterior, idProxima})







     },



     buscar: (req, res) => {
          let busca = req.query.q;
          console.log(busca)
          if (busca) {

               let result = pizzas.filter(p => p.nome.toUpperCase().includes(busca.toUpperCase()));
               console.log(result)

               return res.render('../views/pizzas.ejs', { pizzas: result, busca });
          } else {
               console.log('nao vou te atrapalhar mais !')
               return res.redirect('/')
          }
     }

};
module.exports = PizzasController;

