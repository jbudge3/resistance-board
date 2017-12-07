import React from 'react';
import '../styles/mission.css';

const Mission = (props) => {
    let missionClass;

    if (props.missionNum === props.currentMission) {
        missionClass = "Mission current";
    } else if (props.failed) {
        missionClass = "Mission failed";
    } else if (props.successful) {
        missionClass = "Mission successful";
    } else {
        missionClass = "Mission";
    }

    let numNeeded;

    switch(props.missionNum) {
        case(1):
            numNeeded = props.numPlayers > 7 ? 3 : 2;
            break;
        case(2):
            numNeeded = props.numPlayers > 7 ? 4 : 3;
            break;
        case(3):
            switch(props.numPlayers) {
                case(5):
                    numNeeded = 2;
                    break;
                case(7):
                    numNeeded = 3;
                    break;
                default:
                    numNeeded = 4;
            }
            break;
        case(4):
            switch(props.numPlayers) {
                case(5):
                    numNeeded = 3;
                    break;
                case(6):
                    numNeeded = 3;
                    break;
                case(7):
                    numNeeded = 4;
                    break;
                default:
                    numNeeded = 5;
            }
            break;
        case(5):
            switch(props.numPlayers) {
                case(5):
                    numNeeded = 3;
                    break;
                case(6):
                    numNeeded = 4;
                    break;
                case(7):
                    numNeeded = 4;
                    break;
                default:
                    numNeeded = 5;
            }
            break;
        default:
            console.log("You did something wrong in Mission.js switch");
    }

    return (
        <div className={ missionClass }>
            { numNeeded }
        </div>
    )
}

export default Mission;
