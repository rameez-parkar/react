import React, { useState } from "react";
import "./NewUser.css";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const NewUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        const newUserData = {
            id: Math.random().toString(),
            username: enteredUsername,
            age: +enteredAge
        };

        props.onAddNewUser(newUserData);
        setEnteredUsername('');
        setEnteredAge('');
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form className="new-user" onSubmit={submitHandler}>
                <div className="new-user__field">
                    <label htmlFor="username">Username</label>
                    <input id="username" type='text' value={enteredUsername} onChange={usernameChangeHandler} />
                </div>
                <div className="new-user__field">
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type='number' value={enteredAge} onChange={ageChangeHandler} />
                </div>
                <Button type='submit'>Add User</Button>
            </form>
        </div>
    );
}

export default NewUser;