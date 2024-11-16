import React from "react";
import Tabs from './Tabs';

const tabData = [
    { label: "Restaurants" },
    { label: "Search" },
    { label: "Dishes" }
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