const express = require('express');
const Veiculo = require('../models/Veiculo');

const router = express.Router();


router.get('/', (req, res) => {
    const resp = {}

    try {
        Veiculo.findAll()
        .then(e => {
            res.json(e)  // Sua lógica de rota GET aqui
        });
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})

router.get('/:id', (req, res) => {
    const resp = {}

    try {
        Veiculo.findAll({
            where:{
                id:req.params.id
            }
        })
        .then(e => {
            res.json(e)
        })
        
    } catch (error) {
        console.log(error)
        resp.status = 'fail'

        res.json(resp)
    }
})

router.post('/', (req, res) => {
    const resp = {}

    try {
        Veiculo.build(req.body).save()
        resp.status = "ok"
    } catch (error) {
        resp.status = 'fail'
    }

    res.json(resp)
})

router.put('/:id', (req, res) => {
    const resp = {}

    try {
        Veiculo.findOne({
            where:{
                id:req.params.id
            }
        })
        .then(e => {
            e.update(req.body)
            
            res.json(e)
        })
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})

router.delete('/:id', (req, res) => {
    let resp = {}

    try {
        Veiculo.destroy({
            where:{
                id:req.params.id
            }
        })
  
        resp = {
            status:'ok'
        }
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }

    res.json(resp)
})

module.exports = router;