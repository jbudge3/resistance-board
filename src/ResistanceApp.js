import React, { Component } from 'react';
import './styles/resistance-app.css';
import Welcome from './components/Welcome';
import NumPlayers from './components/NumPlayers';
import SelectLeader from './components/SelectLeader';
import SpyPhase from './components/SpyPhase';
import GameBoard from './components/GameBoard';

class ResistanceApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: "welcome",
            numPlayers: 5,
        };

        this.beginGame = this.beginGame.bind(this);
        this.selectLeader = this.selectLeader.bind(this);
        this.startSpyPhase = this.startSpyPhase.bind(this);
        this.gameBoard = this.gameBoard.bind(this);
        this.adjustPlayers = this.adjustPlayers.bind(this);
    }

    // Change views
    beginGame() {
        this.setState({
            view: "numPlayers"
        });
    }

    selectLeader() {
        this.setState({
            view: "selectLeader"
        });
    }

    startSpyPhase() {
        this.setState({
            view: "spyPhase"
        });
    }

    gameBoard() {
        this.setState({
            view: "gameBoard"
        });
    }

    // Either add or subtract the number of players in the game
    adjustPlayers(action) {
        switch(action) {
            case "add":
                if (this.state.numPlayers < 10) {
                    this.setState({
                        numPlayers: this.state.numPlayers + 1
                    });
                }
                break;
            case "subtract":
                if (this.state.numPlayers > 5) {
                    this.setState({
                        numPlayers: this.state.numPlayers - 1
                    });
                }
                break;
            default:
                console.log("You did something wrong with adjustPlayers function call");
        }
    }

    render() {
        const currentView = (view) => {
            switch(view) {
                case "welcome":
                    return Welcome({beginGame: this.beginGame});
                case "numPlayers":
                    return NumPlayers({numPlayers: this.state.numPlayers, adjustPlayers: this.adjustPlayers, selectLeader: this.selectLeader});
                case "selectLeader":
                    return <SelectLeader numPlayers={this.state.numPlayers} startSpyPhase={this.startSpyPhase} />;
                case "spyPhase":
                    return SpyPhase({gameBoard: this.gameBoard});
                case "gameBoard":
                    return <GameBoard numPlayers={this.state.numPlayers} />
                default:
                    return Welcome({beginGame: this.beginGame});
            }
        }

        return (
            <div className="ResistanceAppContainer">

                { currentView(this.state.view) }

                <div className="startOver" onClick={() => {window.location.reload(true)}}>START OVER</div>
            </div>
        );
    }
}

export default ResistanceApp;
