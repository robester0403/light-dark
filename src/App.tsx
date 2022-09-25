import React, { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <main className="layout-wrapper">
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className={theme ? "light-theme-box" : "dark-theme-box"}>box</div>
        <div>greetingss</div>
      </main>
    </>
  );
}

export default App;
