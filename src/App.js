import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import Users from "./components/users/Users";

function App() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers((prevUsers) => {
            return [...prevUsers, user];
        });
    };

    return (
        <div className="user-list">
            <AddUser addUser={addUser} />
            <Users users={users} />
        </div>
    );
}

export default App;
