import React from 'react';
import '../styles/num-players.css';

const NumPlayers = (props) => {
    return (
        <div className="NumPlayersContainer">

            <h1 className="NumPlayersContainer__prompt">How many players?</h1>

            <div className="NumPlayersContainer__addSubtract">
                <div className="NumPlayersContainer__adjust" onClick={ () =>{ props.adjustPlayers("subtract")} }>
                    -
                </div>
                <div className="NumPlayersContainer__total">
                    { props.numPlayers }
                </div>
                <div className="NumPlayersContainer__adjust" onClick={ () =>{ props.adjustPlayers("add")} }>
                    +
                </div>
            </div>

            <button className="NumPlayersContainer__selectLeader" onClick={ props.selectLeader }>
                Select First Mission Leader
            </button>

        </div>
    );
};

export default NumPlayers;
