import React, { useState } from 'react';

const Q4 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2>{isLoggedIn ? 'Welcome!' : 'Login Again...'}</h2>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default Q4;
