import React from 'react';
import '../styles/game-board.css';
import Mission from './Mission';

class GameBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMission: 1,
            successful: [],
            failed: [],
            gameOver: null
        }

        this.triggerFail = this.triggerFail.bind(this);
        this.triggerSuccess = this.triggerSuccess.bind(this);
    }

    showMissions() {
        const missionsArr = [1, 2, 3, 4, 5];

        return missionsArr.map((mission) => {
            return (
                <Mission
                    key={ mission.toString() }
                    missionNum={ mission }
                    currentMission={ this.state.currentMission }
                    numPlayers={ this.props.numPlayers }
                    failed={ this.state.failed.indexOf(mission) !== -1 }
                    successful={ this.state.successful.indexOf(mission) !== -1 }
                />
            );
        });
    }

    triggerFail() {
        if (this.state.gameOver) { return; }

        let newFailed = this.state.failed.slice(0);
        newFailed.push(this.state.currentMission);

        this.setState({
            failed: newFailed,
            currentMission: this.state.currentMission + 1
        });

        if (newFailed.length === 3) {
            this.setState({
                gameOver: "SPIES WIN!"
            });
        }
    }

    triggerSuccess() {
        if (this.state.gameOver) { return; }

        let newSuccessful = this.state.successful.slice(0);
        newSuccessful.push(this.state.currentMission);

        this.setState({
            successful: newSuccessful,
            currentMission: this.state.currentMission + 1
        });

        if (newSuccessful.length === 3) {
            this.setState({
                gameOver: "RESISTANCE WINS!"
            });
        }
    }

    render() {
        const triggerFailClasses = this.state.gameOver ? "GameBoardContainer__triggerFail gameOver" : "GameBoardContainer__triggerFail";
        const triggerSuccessClasses = this.state.gameOver ? "GameBoardContainer__triggerSuccess gameOver" : "GameBoardContainer__triggerSuccess";
        const winnerClass = this.state.gameOver === "RESISTANCE WINS!" ? "resistanceWins" : "spiesWin";

        return (
            <div className="GameBoardContainer">
                <div className={ winnerClass }>
                    { this.state.gameOver }
                </div>
                <div className="GameBoardContainer__missions">
                    <div className="GameBoardContainer__resultTriggers">
                        { this.state.gameOver ? `Game Over` : `Mission ${this.state.currentMission} Result:`}
                        <div className={ triggerFailClasses } onClick={ this.triggerFail }>
                            FAIL
                        </div>
                        <div className={ triggerSuccessClasses } onClick={ this.triggerSuccess }>
                            SUCCESS
                        </div>
                    </div>

                    <div className="GameBoardContainer__numberedMissions">
                        { this.showMissions() }
                    </div>
                </div>

                <div className="GameBoardContainer__voteTrack">
                </div>
            </div>
        );
    }
}

export default GameBoard;
