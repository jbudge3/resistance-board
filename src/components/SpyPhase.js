import React from 'react';
import '../styles/spy-phase.css';
import basicNarration from '../audio/narration.mp3';

const SpyPhase = (props) => {
    return (
        <div className="SpyPhaseContainer">
            <div className="SpyPhaseContainer__text">Mission Leader: Narrate Spy Phase</div>
            <audio src={basicNarration} controls></audio>
            <button className="SpyPhaseContainer__button" onClick={ props.gameBoard }>Start Game</button>
        </div>
    );
};

export default SpyPhase;
