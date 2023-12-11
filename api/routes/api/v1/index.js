var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
require('models/Cocktail');
const Cocktail = mongoose.model('cocktails');

router.get('/', (req, res) => {
    res.send('Hi')
})

//All cocktails
router.get('/cocktails', async (req, res) => {
    const filter= {};
    const cocktails = await Cocktail.find(filter);
    
    cocktailArray =[];
    for (i in cocktails) {
        cocktail = { cocktail: cocktails[i]}
        cocktailArray.push(cocktail);
    }

    res.json(cocktailArray);
})

//Return Collection of Cocktail Names
router.get('/cocktails/name', async (req, res) => {
    const eachCocktail = await Cocktail.distinct('name');
    res.json(eachCocktail);
 });


//Return JSON data for cocktail by name
router.get('/cocktails/name/:name', async (req, res) => {
    cocktailName = req.params.name
    const filter = {"name": cocktailName};
    const allCocktails = await Cocktail.find(filter);
    //console.log(allDogs)
    res.json(allCocktails);
});

//Return All Cocktail Categories
router.get('/cocktails/categories', async (req, res) => {
    const eachCocktail = await Cocktail.distinct('category');
    res.json(eachCocktail);
 });


module.exports = router;
