const mongoose = require('mongoose');

const Schema=mongoose.Schema;
const bookSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }

},{timestamps:true})
const book=mongoose.model('Book',bookSchema)
module.exports = book