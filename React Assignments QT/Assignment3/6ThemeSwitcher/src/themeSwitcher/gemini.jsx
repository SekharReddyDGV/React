import React, { useState } from 'react';

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div 
      style={{ 
        backgroundColor: isDarkMode ? '#333' : '#fff', 
        padding: '20px', 
        textAlign: 'center' 
      }}
    >
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;