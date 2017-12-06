import React from 'react';
import '../styles/welcome.css';

const Welcome = (props) => {
    return (
        <div className="WelcomeContainer">
            <h1 className="WelcomeContainer__text">Welcome to...The Resistance</h1>
            <button className="WelcomeContainer__begin" onClick={props.beginGame}>BEGIN</button>
        </div>
    );
}

export default Welcome;
