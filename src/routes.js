const {Router} = require('express')

const VeiculoController = require('./controller/VeiculoController')

const router = Router()

router.post('/veiculos', VeiculoController.createVeiculo)
router.put('/veiculos/:id', VeiculoController.updateVeiculo)
router.get('/veiculos', VeiculoController.listVeiculos)
router.delete('/veiculos/:id', VeiculoController.deleteVeiculo)
router.get('/veiculos/:id', VeiculoController.getVeiculoById)



module.exports = router