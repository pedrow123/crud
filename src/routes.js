const {Router} = require('express')
const Locadora = require('./models/locadora')

const router = Router()

router.post('/', async (req, res) => {
    const { locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado } = req.body

    const loc = await Locadora.create({locadora, modelo, marca, ano, motor, portas, cambio, ar_condicionado})

    res.json({loc})
})

module.exports = router