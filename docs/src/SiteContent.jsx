import React, {useState} from "react";
import Tabs from './Tabs';

const tabData = [
    { label: "Restaurants" },
    { label: "Dishes" },
    { label: "Search" }
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