import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import getUpcomingMatches from '../consumers/sportsApiConsumer';
import './MatchList.css';

const onClick = (matchId, team) => {
    // FIXME: This is truly garbage
    let convertedMatchId = matchId.split('').filter(c => !isNaN(c)).join('').substring(0, 10);

    let value = prompt('How much do you want to bet on ' + team + '?');

    // TODO: RIBEIRO FALTA AQUI METER O DINHEIRO NA APOSTA
}

const MatchList = (props) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getUpcomingMatches(setMatches)
        .then(res => {
            setMatches(res);
        })
    }, []);

    return (
        <div className='list'>
            {matches.length > 0 ? matches.map((match) =>
                <MatchCard key={match.id} onClick={onClick} match={match} />
            ) : <p>Loading matches...</p>}
        </div>
    )
}

export default MatchList;