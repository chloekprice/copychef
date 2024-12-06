import React, { useState } from "react";
import DisplayHome from './HomePage';
import displayRestuarants from './Restaurants'
import displaySearch from "./Search";
import Tab from "./Tab";
import "./App.css";
import DisplayRestaurants from "./Restaurants";
import DisplayDishes from "./Dishes";

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    function showSearch() {
        return (
            <div>
                {displaySearch()}
            </div>
        );
    }

    function search(value) {
        if (value === 0) {
            return <DisplayRestaurants />;
        } else if (value === 1) {
            return <DisplayDishes />;
        } else if (value === 2) { 
            return showSearch();
        }
    }
    
    return (
        <div>
            <div className="logo">
                <img src="https://images.vexels.com/content/235846/preview/chefs-cooking-hat-f97ce0.png" height= "75" width="100"  />
                <h1 className="site-name" onClick={() =>handleTabClick(null)} >CopyChef</h1>
            </div>
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
                {activeTab === null && <div><DisplayHome /></div>}
                {activeTab !== null && search(activeTab)}
            </div>
        </div>
    );
};

export default Tabs;

// https://i.pinimg.com/736x/d0/ee/06/d0ee06b03e7f27f5e7955b1d75ebd358.jpg