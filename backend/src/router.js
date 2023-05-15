//imports
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const userValidation = require('./validations/userValidation');

//rotas
router.post('/find-conta-bancaria', userController.findUserByLogin);
router.post('/cadastrar', userValidation.validateBody, userController.createUser);
router.delete('/delete/:id', userController.deleteUser);
router.put('/alterar/:id', userValidation.validateBody, userController.updateUser);
router.get('/find-extrato/:idContaBancaria', userController.findExtratoByIdContaBancaria);

module.exports = router;