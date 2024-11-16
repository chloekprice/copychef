import React from "react";
import data from './RecipesByDish.json'; 

const DishData = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Drink",
    "Side" 
];

const DishDataA = [
    "Breakfast",
    "Lunch" 
];

const DishDataB = [
    "Dinner"
];

const DishDataC = [
    "Dessert"
];

const DishDataD = [
    "Drink",
    "Side" 
];

function getRecipes(name) {
    for (var i = 0; i < data.length; i++){ 
        if (data[i].dish === name) {
            return (
                <div className="recipes">
                    {data[i].recipes.map((recipe, index) => (
                        <div className='recipe-container'>
                            <img className="recipe-image" src= {recipe.image} alt="image"/>
                            <div className="recipe-name" key={index} label={recipe.label}>{recipe.name}</div>
                        </div>
                    ))}
                </div>
            );
        }
    }

    return (<div></div>);
}

function displayDishes() {
    return(
        <div className="dishes">
            <div className="category-container">
                <div className="column">
                    {DishDataA.map((dish, index) => (
                        <div>
                            <div className="restaurant" key={index} label={dish.label}>{dish}</div>
                            <div> 
                                {getRecipes(dish)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="column">
                    {DishDataB.map((dish, index) => (
                        <div>
                            <div className="restaurant" key={index} label={dish.label}>{dish}</div>
                            <div> 
                                {getRecipes(dish)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="column">
                    {DishDataC.map((dish, index) => (
                        <div>
                            <div className="restaurant" key={index} label={dish.label}>{dish}</div>
                            <div> 
                                {getRecipes(dish)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="column">
                    {DishDataD.map((dish, index) => (
                        <div>
                            <div className="restaurant" key={index} label={dish.label}>{dish}</div>
                            <div> 
                                {getRecipes(dish)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default displayDishes;