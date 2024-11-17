import React from "react";

function displayRecipe(recipe_info) {
    return(
        <div>
            <p onClick={recipe_info = null}>GO BACK</p>
            <h1>RECIPE</h1>
            <h2>INGREDIENTS</h2>
                <ul>
                    <li>ingredient #1</li>
                    <li>ingredient #2</li>
                    <li>ingredient #3</li>
                    <li>ingredient #4</li>
                    <li>ingredient #5</li>
                </ul>
            <h3>INSTRUCTIONS</h3>
                <ol>
                    <li>instruction #1</li>
                    <li>instruction #2</li>
                    <li>instruction #3</li>
                    <li>instruction #4</li>
                </ol>
        </div>
    );
}

export default displayRecipe;