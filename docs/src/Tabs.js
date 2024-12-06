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
                {activeTab === null && <div><DisplayHome /></div>}
                {activeTab !== null && search(activeTab)}
            </div>
        </div>
    );
};

export default Tabs;