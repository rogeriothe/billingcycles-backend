const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports =  mongoose.connection.openUri('mongodb://mymoney:x17SMyEmx@ds255857.mlab.com:55857/mymoney')


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'"
mongoose.Error.messages.String.enum =
    "O '{VALUE}' não é válido para o atributo '{PATH}'"
