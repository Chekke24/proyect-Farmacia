const {Schema} = require ('mongoose');
const mongoose = require ('mongoose');




//ESQUEMA BD
const obrasSocialesSchema = new Schema({
    
   
    name:{
        type:String,
        required:[true, 'El name es necesario']
    },
   
    image:{
        type:String,
        required:[ true, 'image es necesario']
    },
});




module.exports = mongoose.model('ObrasSocialesSchema', obrasSocialesSchema);