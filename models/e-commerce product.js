//Require Mongoose
var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: { type: String, required: true },
    id: { type: Date,required: true, default: Date.now() },
    category: { type: String, required:true },
    description: { type: String, required: true },
    mnufacturing_details: {
      model_no: {type:String,required:true},
      company: {type:Sring,reqquired:true},
      manufacturing_date: {type: Dtae, required:true}
    },
    shipping_details: {
      weight: {type:float,required:true},
      height: {type:float,required:true},
      width: {type:float,required:true},
      depth: {type:float,required:true},
    },
    pricing_details: {
      price:{type:int,required:true},
      discount:{type:int},
    } 
});

var ProductModel = mongoose.model('Products', productSchema);

module.exports = ProductModel;
