import React, { useState } from "react";


function displaySearchBar() {
    return(
        <div>
            <div className="search-bar">
                <input type="text" placeholder="Search for copycat recipe..."></input>
            </div>
            <div className="results">
                <p>No results found.</p>
            </div>
        </div>
    );
}

export default displaySearchBar;
