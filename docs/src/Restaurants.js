import React, {useState} from 'react';
import data from './RecipesByRestaurant.json'; 
// import displayRecipe from './RecipeInfoPage';

const RestuarantData = [
    "Cafe Rio",
    "Cheesecake Factory",
    "Chili's",
    "Olive Garden",
    "Panda Express",
    "Red Robin",
    "Shake Shack",
    "Starbucks"
  ];

const RestuarantDataA = [
    "Cafe Rio",
    "Cheesecake Factory"
];

const RestuarantDataB = [
    "Chili's",
    "Olive Garden"
];

const RestuarantDataC = [
    "Panda Express",
    "Red Robin"
];

const RestuarantDataD = [
    "Shake Shack",
    "Starbucks"
];


function DisplayRestaurants() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    const handleRecipeSelect = (recipeChosen) => {
      setSelectedRecipe(recipeChosen);
    };

    const renderPage = () => {
        if (selectedRecipe === null) {
            return (
            <div className="restaurants">
                <div className="category-container">
                    <div className="column">
                        {RestuarantDataA.map((restaurant, index) => (
                            <div>
                                <div className="restaurant" key={index} label={restaurant.label}>{restaurant}</div>
                                <div> 
                                    {getRecipes(restaurant)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="column">
                        {RestuarantDataB.map((restaurant, index) => (
                            <div>
                                <div className="restaurant" key={index} label={restaurant.label}>{restaurant}</div>
                                <div> 
                                    {getRecipes(restaurant)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="column">
                        {RestuarantDataC.map((restaurant, index) => (
                            <div>
                                <div className="restaurant" key={index} label={restaurant.label}>{restaurant}</div>
                                <div> 
                                    {getRecipes(restaurant)}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="column">
                        {RestuarantDataD.map((restaurant, index) => (
                            <div>
                                <div className="restaurant" key={index} label={restaurant.label}>{restaurant}</div>
                                <div> 
                                    {getRecipes(restaurant)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            );
        } else {
            return (
                <div>
                    {displayRecipe(selectedRecipe)}
                </div>
            );
        }
    }
    

    return(
        <div>
            {renderPage()}
        </div> 
    );

    function getRecipes(name) {
        for (var i = 0; i < data.length; i++){ 
            if (data[i].restaurant === name) {
                return (
                    <div className="recipes">
                        {data[i].recipes.map((recipe, index) => (
                            <div className='recipe-container' onClick={() => setSelectedRecipe(recipe)}>
                                <img className="recipe-image" src= {recipe.image} alt="image"/>
                                <div className="recipe-name" key={index} label={recipe.label} >{recipe.name}</div>
                            </div>
                        ))}
                    </div>
                );
            }
        }
    
        return (<div></div>);
    }

    function displayRecipe(recipe_info) {
        return(
            <div>
                <p onClick={() => setSelectedRecipe(null)}>GO BACK</p>
                <h1>{recipe_info.name}</h1>
                <h2>INGREDIENTS</h2>
                <ul>
                    {recipe_info.ingredients.map((ingredient, index) => (
                            <div>
                                <div className="ingredient" key={index} label={ingredient.label}>{ingredient}</div>
                            </div>
                        ))}
                </ul>
                <h3>INSTRUCTIONS</h3>
                    <ol>
                        {recipe_info.instructions.map((instruction, index) => (
                            <div>
                                <div className="instruction" key={index} label={instruction.label}>{instruction}</div>
                            </div>
                        ))}
                    </ol>
            </div>
        );
    }
}

export default DisplayRestaurants;