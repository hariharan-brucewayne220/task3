const mongoose = require('mongoose');
const Schema=mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const detailSchema= new Schema ({
    name:String,
    phonenumber:Number,
    email:String,
    books:[{
        bookname:String,
        author:String,
        price:String
    }]
    
    });
const details=mongoose.model('books',detailSchema);
module.exports=details;