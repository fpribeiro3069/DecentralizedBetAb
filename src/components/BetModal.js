import React, { useState } from 'react';
import {Modal} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

const onBet = (value, matchId, team) => {
    console.log(value);
    // TODO: RIBEIRO FALTA AQUI METER O DINHEIRO NA APOSTA
}

const BetModal = ({activeMatch, activeTeam}) => {
    const [currValue, setCurrValue] = useState('');
    
    return (
        
        <div className="modal">
            <span>How much do you want to bet on {activeTeam}?</span>
            <input type="text" placeholder="...eth" onChange={(e) => setCurrValue(e.target.value)}></input>
            <Button className="button-primary" onClick={() => onBet(currValue, activeMatch, activeTeam)}>BET!</Button>
        </div>
    );
}

export default BetModal;