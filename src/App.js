import "./App.scss";
import React from "react";
import Header from "./components/header/header";
import Windows from "./components/windows";
function App() {
  return (
    // <div className="App">
    <div className="hero">
      <div className="diagonal-hero-bg">
        <div className="stars">
          <div className="small"></div>
          <div className="medium"></div>
          <div className="big"></div>
          <div className="content">
            <div className="container">
              {" "}
              <Header />
              <Windows />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
