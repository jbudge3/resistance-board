import React from 'react';
import '../styles/spy-phase.css';

const SpyPhase = (props) => {
    return (
        <div className="SpyPhaseContainer">
            <div className="SpyPhaseContainer__text">Mission Leader: Narrate Spy Phase</div>
            <button className="SpyPhaseContainer__button">Start Game</button>
        </div>
    );
};

export default SpyPhase;
