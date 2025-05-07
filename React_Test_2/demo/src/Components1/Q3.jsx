import React, { useState } from 'react';

const Q3 = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    )
}

export default Q3
