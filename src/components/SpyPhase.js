import React from 'react';
import '../styles/spy-phase.css';
import narration2 from '../audio/resistance-narration2.mp3';

const SpyPhase = (props) => {
    return (
        <div className="SpyPhaseContainer">
            <div className="SpyPhaseContainer__text">Mission Leader: Narrate Spy Phase</div>
            <audio controls src={ narration2 }>
            </audio>
            <button className="SpyPhaseContainer__button" onClick={ props.gameBoard }>Start Game</button>
        </div>
    );
};

export default SpyPhase;
