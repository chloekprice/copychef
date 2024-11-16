import './App.css';
import React, { useState } from 'react';
import displayFooter from './SiteFooter';
import displayWebsite from './SiteContent';

function App() {

  return (
    <div className="site">
      <div>
        {displayWebsite()}
      </div>
      <footer>
        {displayFooter()}
      </footer>
    </div>
  );
}

export default App;
