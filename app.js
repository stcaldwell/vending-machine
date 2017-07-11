const express = require('express');
const bodyParser = require('body-parser');
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect(config.mongoURL);

Item =  require('./models/items')


app.get('/api/customer/items', function(req, res){
  Item.getItems(function(err, item){
    if(err){
     throw err;
    }
    res.json(item);
  })
});

app.get('/api/vendor/purchase', function(req, res){
 Purchase.getPurchases(function(err, purchase){
  if(err){
    throw err;
  }
  res.json(purchase);
  })
});




if (require.main === module) {
  app.listen(27017, function(){
    console.log('it works!');
  })
}

module.exports = app;
