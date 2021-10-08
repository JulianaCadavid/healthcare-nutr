const express = require('express')
const router = express.Router()
const actCtrl = require('../controllers/act.controller')

router.get('/:id', actCtrl.getOne)
router.post('/imc/:id', actCtrl.calculateimc)


module.exports= router