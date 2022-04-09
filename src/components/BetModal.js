import React, { useState } from 'react';
import { placeBet } from '../wrapper.js';
import './BetModal.css';

const onBet = (value, matchId, teamId) => {
    console.log(value);
    placeBet(value, teamId, matchId);
}

const Modal = ({activeMatch, activeTeam, activeTeamId}) => {
    const [currValue, setCurrValue] = useState('');
    
    return (

        <div className="modal">
            <span>How much do you want to bet on {activeTeam}?</span>
            <input type="text" placeholder="...eth" onChange={(e) => setCurrValue(e.target.value)}></input>
            <button className="button-primary" onClick={() => onBet(currValue, activeMatch, activeTeamId)}>BET!</button>
        </div>
    );
}

export default Modal;