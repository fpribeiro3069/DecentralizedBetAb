import React, { useState } from 'react';
import './MatchCard.css';

const MatchCard = ({ match, setBetting, setActiveMatch, setActiveTeam, setActiveTeamId }) => {
    const onClick = (team, id) => {
        setBetting(true);
        setActiveMatch(match.id);
        setActiveTeam(team);
        setActiveTeamId(id);
    }

    return (
        <>
            <div className='card'>
                <button className="button-primary" onClick={() => { onClick(match.home_team, 1); } }>{match.home_team}</button>
                vs
                <button className="button-primary"  onClick={() => { onClick(match.away_team, 2); }}>{match.away_team}</button>
            </div>
        </>
    )
};

export default MatchCard;