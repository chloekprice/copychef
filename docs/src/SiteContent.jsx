import React from "react";
import Tabs from './Tabs';

const tabData = [
    { label: "Restaurants" },
    { label: "Breakfast" },
    { label: "Lunch" },
    { label: "Dinner"},
    { label: "Dessert"}
  ];

function displayWebsite() {
    return (
        <div>
             <div>
                <Tabs tabs={tabData} />
             </div>
        </div>
    );
}

export default displayWebsite;