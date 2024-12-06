import React, {useState} from "react";
import recipes from "./Recipes.json";
import "./HomePage.css";


function DisplayHome() {

    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    const handleRecipeSelect = (recipeChosen) => {
      setSelectedRecipe(recipeChosen);
    };


    let featuredRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    let remainingRecipes = recipes.filter(recipe => recipe !== featuredRecipe);
    let suggestedRecipes = remainingRecipes.sort(() => Math.random() - 0.5).slice(0,4);
    let recipe1 = suggestedRecipes[0];
    let recipe2 = suggestedRecipes[1];
    let recipe3 = suggestedRecipes[2];
    let recipe4 = suggestedRecipes[3];

    const renderPage = () => {
        if (selectedRecipe === null) {
            return (
                <div className="homepage">
                    
                    <div className="featured-recipe" onClick={() => setSelectedRecipe(featuredRecipe)}>
                        <h1>Featured Recipe</h1>
                        <img src={featuredRecipe.image} alt={featuredRecipe.name} className="featured-image"/>
                        <h2 className="featured-title">{featuredRecipe.name}</h2>
                    </div>
                    
                    <h1 className="suggested-header">Suggested Recipes</h1>
                    <div className="suggested-recipes">
                        <span className="recipe" onClick={() => setSelectedRecipe(recipe1)}>
                            <img src={recipe1.image} alt={recipe1.name} className="suggested-image"/>
                            <h2 className="suggested-title">{recipe1.name}</h2>
                        </span>
                        <span className="recipe" onClick={() => setSelectedRecipe(recipe2)}>
                            <img src={recipe2.image} alt={recipe2.name} className="suggested-image"/>
                            <h2 className="suggested-title">{recipe2.name}</h2>
                        </span>
                        <span className="recipe" onClick={() => setSelectedRecipe(recipe3)}>
                            <img src={recipe3.image} alt={recipe3.name} className="suggested-image"/>
                            <h2 className="suggested-title">{recipe3.name}</h2>
                        </span>
                        <span className="recipe" onClick={() => setSelectedRecipe(recipe4)}>
                            <img src={recipe4.image} alt={recipe4.name} className="suggested-image"/>
                            <h2 className="suggested-title">{recipe4.name}</h2>                
                        </span>
                    </div>
                </div>
            );
        } else {
            return(
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

    function displayRecipe(recipe_info) {
        return(
            <div className="selected-display">
                <img onClick={() => setSelectedRecipe(null)} src="https://pngmaterial.com/dvsxyz02/uploads/back-arrow-png.png" className="back-button" />
                <div className="selected-recipe-info">
                    <h1>{recipe_info.name}</h1>
                    <img src={recipe_info.image} alt={recipe_info.name} className="selected-image"/>
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
            </div>
        );
    }
    
}

export default DisplayHome;