import React from "react";
import Tabs from './Tabs';

const tabData = [
    { label: "Restaurants" },
    { label: "Breakfast" },
    { label: "Lunch" },
    { label: "Dinner"},
    { label: "Dessert"}
  ];

function displayHeader() {
    return (
        <div>
             <h1 className="site-name">CopyChef</h1>
             <div>
                <Tabs tabs={tabData} />
             </div>
        </div>
    );
}

export default displayHeader;