import React, { useState } from 'react';
import './BetModal.css';

const onBet = (value, matchId, team) => {
    console.log(value);
    // TODO: RIBEIRO FALTA AQUI METER O DINHEIRO NA APOSTA
}

const Modal = ({activeMatch, activeTeam}) => {
    const [currValue, setCurrValue] = useState('');
    
    return (
        
        <div className="modal">
            <span>How much do you want to bet on {activeTeam}?</span>
            <input type="text" placeholder="...eth" onChange={(e) => setCurrValue(e.target.value)}></input>
            <button className="button-primary" onClick={() => onBet(currValue, activeMatch, activeTeam)}>BET!</button>
        </div>
    );
}

export default Modal;