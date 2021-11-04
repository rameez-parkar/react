import React from "react";
import "./User.css";

const User = (props) => {
    return (
        <div className="user__card">
            {props.username} ({props.age} years old)
        </div>
    );
}

export default User;