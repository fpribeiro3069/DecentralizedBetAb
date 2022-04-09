import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard.js';
import BetModal from '../components/BetModal.js';
import getUpcomingMatches from '../consumers/sportsApiConsumer.js';
import './MatchList.css';

const MatchList = (props) => {
    const [matches, setMatches] = useState([]);
    const [betting, setBetting] = useState(false);
    const [activeMatch, setActiveMatch] = useState(null);
    const [activeTeam, setActiveTeam] = useState(null);
    const [activeTeamId, setActiveTeamId] = useState(0);

    useEffect(() => {
        getUpcomingMatches(setMatches)
        .then(res => {
            setMatches(res);
        })
    }, []);

    return (
        <>
            { betting && <BetModal activeMatch={activeMatch} activeTeam={activeTeam} activeTeamId={activeTeamId} /> }
            <div className='list'>
                {matches.length > 0 ? matches.map((match) =>
                    <MatchCard key={match.id} setBetting={setBetting} setActiveMatch={setActiveMatch} setActiveTeam={setActiveTeam} setActiveTeamId={setActiveTeamId} match={match} />
                ) : <p>Loading matches...</p>}
            </div>
        </>
    )
}

export default MatchList;