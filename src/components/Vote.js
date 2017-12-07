import React from 'react';
import '../styles/vote.css';

const Vote = (props) => {
    const voteNumClass = props.num === props.position ? "VoteNum currentVote" : "VoteNum";
    return (
        <div className={ voteNumClass }>
            { props.num }
        </div>
    );
}

export default Vote;
