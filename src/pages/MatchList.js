import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import getUpcomingMatches from '../consumers/sportsApiConsumer';
import './MatchList.css';

const onClick = (team) => {
    let value = prompt('How much do you want to bet on ' + team + '?');

    console.log(value);

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
            {matches.map((match) => {
                console.log(match)
                return <MatchCard key={match.id} onClick={onClick} match={match} />
            })}
        </div>
    )
}

export default MatchList;