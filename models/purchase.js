const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const purchaseSchema = new mongoose.Schema({
  [
      {
        "status": {type:Boolean},
          "itemspurchased": [{
              "item":{type:String},
              "quantity":{type:Number}
          }],
          "time": {type:new Date()},
        "data": {
          "money_given": {type:Number},
          "money_required": {type:Number}
        }
      }
  ]

})

const Purchase = module.exports = mongoose.model('Purchase', purchaseSchema);

module.exports.getPurchase = function(callback, limit){
  Purchase.find(callback).limit(limit);
}
