import React, { useState } from "react";
import displayHome from './HomePage';
import displayRestuarants from './Restaurants'
import displayBreakfast from './Breakfast'
import displayLunch from './Lunch'
import displayDinner from './Dinner'
import displayDessert from './Dessert'
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

    function showBreakfast() {
        return (
            <div>
                {displayBreakfast()}
            </div>
        );
    }

    function showLunch() {
        return (
            <div>
                {displayLunch()}
            </div>
        );
    }

    function showDinner() {
        return (
            <div>
                {displayDinner()}
            </div>
        );
    }

    function showDessert() {
        return (
            <div>
                {displayDessert()}
            </div>
        );
    }

    function search(value) {
        if (value === 0) {
            return showRestaurants();
        } else if (value === 1) {
            return showBreakfast();
        } else if (value === 2) {
            return showLunch(); 
        } else if (value === 3) {
            return showDinner();
        } else if (value === 4) {
            return showDessert();
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
                <div>
                    {activeTab === null && <div>{displayHome()}</div>}
                    {activeTab !== null && search(activeTab)}
                </div>
            </div>
        </div>
    );
};

export default Tabs;