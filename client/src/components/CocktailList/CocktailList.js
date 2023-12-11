import React, {useState, useEffect} from "react";
import Recipe from "src/components/Recipe/Recipe";
import axios from "axios";
import {nanoid} from "nanoid";

function CocktailList(props) {

  
   console.log("Cocktail Props", props)
   console.log("props.cocktail", props.cocktail)
   

    return(
        <div className="character-cont">
        
        
        <div className="col mb-3">
         <div className="card"> 
        <h1 className="card-header text-center bg-success text-light">{props.cocktail.cocktail.name}</h1>
        <Recipe 
        preparation={props.cocktail.cocktail.preparation}
        garnish={props.cocktail.cocktail.garnish}
        ingredients={props.cocktail.cocktail.ingredients}
        image={props.cocktail.cocktail.image}
        id={`char-${nanoid()}`}
        key={`char-${nanoid()}`}
        /> 
        </div>
        </div>
        </div>
        
        
        
    )
    
    

}

export default CocktailList;