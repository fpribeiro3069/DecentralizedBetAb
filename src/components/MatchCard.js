import React, { useState } from 'react';
import './MatchCard.css';

const MatchCard = ({ match, setBetting, setActiveMatch, setActiveTeam }) => {
    const onClick = (team) => {
        setBetting(true);
        setActiveMatch(match.id);
        setActiveTeam(team);
    }

    return (
        <>
            <div className='card'>
                <button className="button-primary" onClick={() => { onClick(match.home_team); } }>{match.home_team}</button>
                vs
                <button className="button-primary"  onClick={() => { onClick(match.away_team); }}>{match.away_team}</button>
            </div>
        </>
    )
};

export default MatchCard;