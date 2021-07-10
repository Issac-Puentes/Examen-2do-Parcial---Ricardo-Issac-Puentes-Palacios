const mongoose = require('mongoose');

const SabritasSchema = new mongoose.Schema({
    Codigo:{
        type: String,
        required:true,
        unique:true
    },
    Nombre:{
        type: String,
        required:true
    },
    Gramos:{
        type:String,
        required:true
    },
    Precios:{
        type:Number,
        required:true
    },
    Fecha:{
        type: Date,
        default:Date.now
    }

})

const Sabritas = mongoose.model('Sabritas', SabritasSchema);

module.exports = Sabritas;