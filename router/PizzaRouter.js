const express = require('express');
const router = express.Router();

module.exports = router;

const PizzasController = require('../controllers/PizzasController');
router.get('/', PizzasController.listar)
 router.get ('/pizzas/:id')