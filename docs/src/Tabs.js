import React, { useState } from "react";
import displayHome from './HomePage';
import displayRestuarants from './Restaurants'
import displaySearch from "./Search";
import displayDishes from "./Dishes";
import Tab from "./Tab";
import "./App.css";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // const [showHome, setShowHome] = useState(true);
    // const [searchQuery, setSearchQuery] = useState(null);
    // const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    // const handleSearch = (query) => {
    //   setSearchQuery(query)
    // }
    
    // const handleRecipeSelect = (recipe) => {
    //   setSelectedRecipe(recipe);
    // };


    function showRestaurants() {
        return (
            <div>
                {displayRestuarants()}
            </div>
        );
    }

    function showSearch() {
        return (
            <div>
                {displaySearch()}
            </div>
        );
    }

    function showDishes() {
        return (
            <div>
                {displayDishes()}
            </div>
        );
    }

    function search(value) {
        if (value === 0) {
            return showRestaurants();
        } else if (value === 1) {
            return showSearch();
        } else if (value === 2) {
            return showDishes(); 
        }
    }
    
    return (
        <div>
            <h1 className="site-name" onClick={() =>handleTabClick(null)}>
                CopyChef
            </h1>
            <div className="tabs-container">
                <div className="tabs">
                    {tabs.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            onClick={() =>
                                handleTabClick(index)
                            }
                            isActive={index === activeTab}
                        />
                    ))}
                </div>
            </div>
            <div className="main-content">
                {activeTab === null && <div>{displayHome()}</div>}
                {activeTab !== null && search(activeTab)}
            </div>
        </div>
    );
};

export default Tabs;