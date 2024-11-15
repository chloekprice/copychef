import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import displayRecipe from './RecipeInfoPage';
import displayHeader from './SiteHeader';
import displayHome from './HomePage';
import displaySearchResults from './SearchResultsPage';
import displayFooter from './SiteFooter';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleHomeShow = (goHome) => {
    setShowHome(goHome)
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="site">
      <header>
        {displayHeader()}
      </header>
      <div className="main-content">
        {showHome && <div>{displayHome()}</div>}
        {searchQuery && <div>{displaySearchResults(searchQuery)}</div>}
        {selectedRecipe !== null && <div>{displayRecipe(selectedRecipe)}</div>}
      </div>
      <footer>
        {displayFooter()}
      </footer>
    </div>
  );
}

export default App;
