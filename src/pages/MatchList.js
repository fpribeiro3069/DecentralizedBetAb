import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard.js';
import getUpcomingMatches from '../consumers/sportsApiConsumer.js';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { placeBet } from '../wrapper.js';
import './MatchList.css';

const onBet = (value, matchId, teamId) => {
    console.log(value);
    matchId = matchId.split('').filter((c) => !isNaN(c)).join('');
    console.log(matchId);
    placeBet(value, teamId, matchId);
}

const MatchList = (props) => {
    const [currValue, setCurrValue] = useState('');
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
        <div className='container'>
            <Modal show={betting} onHide={() => setBetting(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Betting on {activeTeam}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Insert how much you want to bet!</span>
                    <input className="form-control" type="text" placeholder="...eth" onChange={(e) => setCurrValue(e.target.value)}></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setBetting(false)}>
                        Close
                    </Button>
                    <Button onClick={() => onBet(currValue, activeMatch, activeTeam, activeTeamId)}>BET!</Button>
                </Modal.Footer>
            </Modal>
            {matches.length > 0 ? (
                <div className='list'>
                    {matches.map((match) =>
                        <MatchCard key={match.id} setBetting={setBetting} setActiveMatch={setActiveMatch} setActiveTeam={setActiveTeam} setActiveTeamId={setActiveTeamId} match={match} />
                    )}
                </div>
            ) : <span className='loading'>Loading...</span>}
        </div>
    )
}

export default MatchList;