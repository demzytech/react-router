import React, { useState, useEffect } from 'react';

const Lightmode = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // You can save the user's preferred theme in localStorage or a backend
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    
    <div className={`App ${theme}`}>
      <h1>{theme === 'light'  }</h1>
      <button onClick={toggleTheme} className='themebtn'>Color Mode</button>
      {/* Your application content goes here */}
    </div>
    
  );
};

export default Lightmode;
