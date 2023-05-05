const userModel = require('../models/userModel')

const getAll = async(req, res) => {
    return res.status(200).json(await userModel.getAll());
}

const createUser = async(req, res) => {
    return res.status(201).json(await userModel.createUser(req.body));
}

const deleteUser = async(req, res) => {
    await userModel.deleteUser(req.params.id);
    return res.status(204).json()
}

const updateUser = async(req, res) => {
    return res.status(200).json(await userModel.updateUser(req))
}

module.exports = {
    getAll, 
    createUser,
    deleteUser,
    updateUser
} 