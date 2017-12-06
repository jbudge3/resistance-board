import React from 'react';
import '../styles/select-leader.css';

class SelectLeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showResult: false
        }

        this.showResult = this.showResult.bind(this);
    }

    showResult() {
        this.setState({
            showResult: true
        });
    }

    render() {
        const goClasses = this.state.showResult ? "SelectLeaderContainer__go hide" : "SelectLeaderContainer__go";
        const resultClasses = this.state.showResult ? "SelectLeaderContainer__result" : "SelectLeaderContainer__result hide";
        const spyPhaseClasses = this.state.showResult ? "SelectLeaderContainer__spyPhase" : "SelectLeaderContainer__spyPhase hide";
        return (
            <div className="SelectLeaderContainer">
                <button className={ goClasses } onClick={ this.showResult }>
                    GO
                </button>

                <div className={ resultClasses }>
                    <div className="SelectLeaderContainer__resultText">Player in position</div>
                    <div className="SelectLeaderContainer__resultNum">{ selectRandomLeader(1, this.props.numPlayers) }</div>
                    <div className="SelectLeaderContainer__resultText">clockwise from position 1</div>

                    <button className={ spyPhaseClasses } onClick={ this.props.startSpyPhase }>
                        Spy Phase
                    </button>
                </div>

                <div className="SelectLeaderContainer__positionOne">
                    POSITION 1
                </div>

                <div className="SelectLeaderContainer__triangle">
                </div>

            </div>
        );
    }

};

export default SelectLeader;

const selectRandomLeader = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
