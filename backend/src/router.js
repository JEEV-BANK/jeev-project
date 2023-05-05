//imports
const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const userValidation = require('./validations/userValidation');

//rotas
router.get('/login', userController.getAll);
router.post('/cadastrar', userValidation.validateBody, userController.createUser);
router.delete('/delete/:id', userController.deleteUser);
router.put('/alterar/:id', userValidation.validateBody, userController.updateUser);

module.exports = router;