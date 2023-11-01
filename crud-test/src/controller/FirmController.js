const express = require('express');
const Firm = require('../models/Firm');

const router = express.Router();


router.get('/', (req, res) => {
    const resp = {}

    try {
        Firm.findAll()
        .then(e => {
            res.json(e)  // Sua lógica de rota GET aqui
        });
        
        router.get('/:id', (req, res) => {
          // Sua lógica de rota GET com parâmetro de ID aqui
        });
        
        router.post('/', (req, res) => {
          // Sua lógica de rota POST aqui
        });
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})

router.get('/:id', (req, res) => {
    const resp = {}

    try {
        Firm.findAll({
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
        Firm.build(req.body).save()
        resp.status = "ok"
    } catch (error) {
        resp.status = 'fail'
    }

    res.json(resp)
})

router.put('/:id', (req, res) => {
    const resp = {}

    try {
        Firm.findOne({
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

module.exports = router;