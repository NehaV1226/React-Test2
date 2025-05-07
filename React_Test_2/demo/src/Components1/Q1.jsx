import React, { useState } from "react";

const Q1 = () => {
    const [user, setUser] = useState({ name: "", age: "", email: "" });

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>User Details</h2>
            <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} /><br />
            <input type="number" placeholder="Age" onChange={(e) => setUser({ ...user, age: e.target.value })} /><br />
            <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} /><br />
            <button onClick={() => alert(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`)}>Submit</button>
        </div>
    );
};

export default Q1;
