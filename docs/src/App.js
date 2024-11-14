import logo from './logo.svg';
import './App.css';
import './RecipeInfoPage'
import displayRecipe from './RecipeInfoPage';

function App() {
  return (
    <div className="Site">
     {displayRecipe("recipe")}
    </div>
  );
}

export default App;
