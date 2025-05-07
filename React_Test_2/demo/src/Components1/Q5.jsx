import React, { useState } from 'react';

const Q5 = () => {
    const [userRole, setUserRole] = useState('Regular User');

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Dashboard</h2>
            <p>{userRole === 'Admin' ? 'Welcome, Neha! You have full access.' : 'Welcome, User! You have limited access.'}</p>
            <button onClick={() => setUserRole(userRole === 'Admin' ? 'Regular User' : 'Admin')}>
                Switch to {userRole === 'Admin' ? 'Regular User' : 'Admin'}
            </button>
        </div>
    );
};

export default Q5;
