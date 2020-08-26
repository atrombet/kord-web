import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-info">
          <img className="app-logo" src="./kord.png" alt="Kord Music App logo" />
          <div className="app-buttons">
            <img src="./appStore.png" alt="Download on Apple App Store button" />
            <img src="./googlePlay.png" alt="Download on Google Play Store button" />
          </div>
          <p>Learn More</p>
        </div>
        <img className="app-screen" src="iPhone7Mock.png" alt="Screenshot of Kord Music app on iPhone 7" />
      </header>
    </div>
  );
}

export default App;
