const express = require('express')

module.exports = function (server) {

    // URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclos de pagamentos
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}