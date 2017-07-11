const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const itemSchema = new mongoose.Schema({
    description: {type:String, required:true},
    cost: {type:Number, required:true},
    quantity: {type:Number, required:true}

})

const Item = module.exports = mongoose.model('Item', itemSchema);

module.exports.getItems = function(callback, limit){
  Item.find(callback).limit(limit);
}
