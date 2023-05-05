const validateBody = (req, res, next) => {
    if(req.nome == null || req.nome == undefined || req.nome == '' ) {
        return res.status(400).json('O campo "nome" deve ser preenchido!')
    }
    next();
}

module.exports = {
    validateBody
}