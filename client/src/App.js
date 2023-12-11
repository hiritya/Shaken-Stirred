import React, {useState, useEffect} from 'react'; 
import CocktailList from "src/components/CocktailList/CocktailList";
import axios from 'axios';
import {nanoid} from 'nanoid';

function App(props) {

  const [cocktails, setCocktails] = useState([]) 

  // Add hook to load when component renders
  useEffect(()=>{
    
    const loadCocktails = async() => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/cocktails`)
        
        setCocktails(()=>[...response.data])
      }
      catch (error){
        console.log("Error")
      }
    };
    loadCocktails();
  }, []);


  console.log("Cocktails Array:", cocktails);


  const cocktailList = cocktails.map( (cT)=> 
  
  <CocktailList 
  cocktail={ cT }
  id={`cT-${nanoid()}`}
  key={`cT-${nanoid()}`}
  />
  )

  return (
    
        <div className="App">
          <div className="container">
            <h1 className="h1 text-center pt-3">Shaken & Stirred</h1>
            <h4 className="h4 text-center">Learn to make your favorite cocktails!</h4>
          <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 bg-light p-3"> 
          {cocktailList} 
          </div>
         </div>
            
        </div>
       
  );
}

export default App;
