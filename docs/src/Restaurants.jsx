import React from 'react';
import data from './RecipesByRestaurant.json'; 

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

function getRecipes(name) {
    for (var i = 0; i < data.length; i++){ 
        if (data[i].restaurant === name) {
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


function displayRestaurants() {

    return(
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
}

export default displayRestaurants;