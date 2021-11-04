import React from "react";
import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop" onClick={props.onConfirm}></div>
            <div className="modal">
                <header className="header">
                    <h2>
                        {props.title}
                    </h2>
                </header>
                <div className="content">
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </div>
        </div>
    );
}

export default ErrorModal;