const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CocktailSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    image:{
        type:String
    },
    glass:{
        type:String
    },
    category:{
        type:String
    },
    ingredients:{
        type:Array,
        trim: true
    },
    garnish:{
        type:String,
    },
    preparation:{
        type:String,
        trim: true
    }

});

mongoose.model('cocktails', CocktailSchema)