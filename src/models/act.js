const mongoose = require('mongoose')
const { Schema } = mongoose

const ActSchema = new Schema({
    imc:{type:Number, required:true}, 
    bodytype:{type:String, required: true}
})


module.exports = mongoose.model('Act',ActSchema )