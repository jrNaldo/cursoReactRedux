const express = require('express')

module.exports = function(server) {
    // Url base
    const router = express.Router()
    server.use('/api', router)

    // Rotas do ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}