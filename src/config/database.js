const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports =  mongoose.connection.openUri('mongodb://root:ogfy1ixfqxz@189.43.21.147:27017/mymoney?authSource=admin')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'"
mongoose.Error.messages.String.enum =
    "O '{VALUE}' não é válido para o atributo '{PATH}'"
