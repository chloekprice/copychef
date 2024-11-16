import React from "react";
import recipes from "./Recipes.json";
import "./HomePage.css";


function displayHome() {

    let featuredRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    let remainingRecipes = recipes.filter(recipe => recipe !== featuredRecipe);
    let suggestedRecipes = remainingRecipes.sort(() => Math.random() - 0.5).slice(0,4);
    let recipe1 = suggestedRecipes[0];
    let recipe2 = suggestedRecipes[1];
    let recipe3 = suggestedRecipes[2];
    let recipe4 = suggestedRecipes[3];

    return (
        <div className="homepage">
            
            <div className="featured-recipe">
                <h1>Featured Recipe</h1>
                <img src={featuredRecipe.image} alt={featuredRecipe.name} className="featured-image"/>
                <h2 className="featured-title">{featuredRecipe.name}</h2>
            </div>
            
            <h1 className="suggested-header">Suggested Recipes</h1>
            <div className="suggested-recipes">
                <span className="recipe">
                    <img src={recipe1.image} alt={recipe1.name} className="suggested-image"/>
                    <h2 className="suggested-title">{recipe1.name}</h2>
                </span>
                <span className="recipe">
                    <img src={recipe2.image} alt={recipe2.name} className="suggested-image"/>
                    <h2 className="suggested-title">{recipe2.name}</h2>
                </span>
                <span className="recipe">
                    <img src={recipe3.image} alt={recipe3.name} className="suggested-image"/>
                    <h2 className="suggested-title">{recipe3.name}</h2>
                </span>
                <span className="recipe">
                    <img src={recipe4.image} alt={recipe4.name} className="suggested-image"/>
                    <h2 className="suggested-title">{recipe4.name}</h2>                </span>
            </div>
        </div>
    );
}

export default displayHome;