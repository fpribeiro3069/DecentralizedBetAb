import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard.js';
import BetModal from '../components/BetModal.js';
import getUpcomingMatches from '../consumers/sportsApiConsumer.js';
import './MatchList.css';

const onClick = (setBetting) => {
    // FIXME: This is truly garbage
    setBetting(true);
    // let convertedMatchId = matchId.split('').filter(c => !isNaN(c)).join('').substring(0, 10);

}

const MatchList = (props) => {
    const [matches, setMatches] = useState([]);
    const [betting, setBetting] = useState(false);
    const [activeMatch, setActiveMatch] = useState(null);
    const [activeTeam, setActiveTeam] = useState(null);

    useEffect(() => {
        getUpcomingMatches(setMatches)
        .then(res => {
            setMatches(res);
        })
    }, []);

    return (
        <>
            { betting && <BetModal activeMatch={activeMatch} activeTeam={activeTeam} /> }
            <div className='list'>
                {matches.length > 0 ? matches.map((match) =>
                    <MatchCard key={match.id} setBetting={setBetting} setActiveMatch={setActiveMatch} setActiveTeam={setActiveTeam} match={match} />
                ) : <p>Loading matches...</p>}
            </div>
        </>
    )
}

export default MatchList;