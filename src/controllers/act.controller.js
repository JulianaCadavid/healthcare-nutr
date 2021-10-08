const { default: axios } = require('axios')
const Act = require('../models/act')
const User = require('../models/act')
const actCtrl = {}


actCtrl.getOne = async (req, res) => {
    try{
        var id = req.params.id
        console.log(id) 
        const user = await axios.get(`http://192.168.22.3:5000/api/users/${id}`)
            
        return res.json(user.data)
    }
    catch(err){
        res.status(500).json(err)
    }
}


actCtrl.calculateimc = async (req, res) => {
    try{
        var id = req.params.id
        const user = await axios.get(`http://192.168.22.3:5000/api/users/${id}`)
        const height = user.data.height
        const weight = user.data.weight
        const heightp = Math.pow(height, 2)
        var imc = weight/heightp
        if(imc<18.4){
            return res.status(200).json({"Indice de masa corporal": imc, "Rango": "Delgadez"})
        } else if(18.5<=imc<24.9){
            return res.status(200).json({"Indice de masa corporal": imc, "Rango": "Peso saludable"})
        } else {
            return res.status(200).json({"Indice de masa corporal": imc, "Rango": "SObrepreso"})
        }
        return res.status(200).json({"Indice de masa corporal": imc})
    }
    catch(err){
        res.status(400).json(err)
    }
}



module.exports = actCtrl