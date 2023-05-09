const userModel = require('../models/userModel')

const getAllUsers = async(req, res) => {
    return res.status(200).json(await userModel.getAllUsers());
}

const findUserByLogin = async(req, res) => {
    return res.status(200).json(await userModel.findUserByLogin(req))
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
    getAllUsers, 
    createUser,
    deleteUser,
    updateUser,
    findUserByLogin
} 