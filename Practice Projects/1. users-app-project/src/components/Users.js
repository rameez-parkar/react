import React from "react";
import "./Users.css";
import User from "./User";

const Users = (props) => {
    return (
        <div className="users__container">
            {props.usersList.map(user => (
                <User
                    key={user.id}
                    username={user.username}
                    age={user.age}
                />
            ))}
        </div>
    );
}

export default Users;