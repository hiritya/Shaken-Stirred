import React from "react";


function Recipe(props) {
 console.log("Recipe Props",props)

 const ingredientsList = props.ingredients.map((i, index) => (
  i.ingredient ? <li className= "list-group-item" key={index}> {i.amount} {i.unit}  {i.ingredient}</li> : null
));
console.log("Image:", props.image);

const garnishSection = props.garnish ? (
  <div>
    <h5>Garnish:</h5>
    <p className="card-text text-dark">{props.garnish}</p>
  </div>
) : null;

  return (
    
      
        <div className="card-body">
          <div className="image text-center">
       <img src={`images/${props.image}`} className="card-img-top" alt={props.image}
       style={{width:"200px", height:"250px"}}/>
          </div>
          <p className="card-text text-success">
            <ul className="list-group list-group-flush">
              {ingredientsList}
            </ul>
            <br />
            <h4>Instructions:</h4>
            <p className="card-text text-dark">{props.preparation}</p>
            {garnishSection}
          </p>
        </div>
      
    
  );
}

export default Recipe;