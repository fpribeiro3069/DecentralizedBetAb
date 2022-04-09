import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard.js';
import BetModal from '../components/BetModal.js';
import getUpcomingMatches from '../consumers/sportsApiConsumer.js';
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap';
import './MatchList.css';

const onClick = (setBetting) => {
    // FIXME: This is truly garbage
    setBetting(true);
    // let convertedMatchId = matchId.split('').filter(c => !isNaN(c)).join('').substring(0, 10);

}

const onBet = (value, matchId, team) => {
    console.log(value);
    // TODO: RIBEIRO FALTA AQUI METER O DINHEIRO NA APOSTA
}

const MatchList = (props) => {
    const [currValue, setCurrValue] = useState('');
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
                    <Button onClick={() => onBet(currValue, activeMatch, activeTeam)}>BET!</Button>
                </Modal.Footer>
            </Modal>
            {matches.length > 0 ? (
                <div className='list'>
                    {matches.map((match) =>
                        <MatchCard key={match.id} setBetting={setBetting} setActiveMatch={setActiveMatch} setActiveTeam={setActiveTeam} match={match} />
                    )}
                </div>
            ) : <span className='loading'>Loading...</span>}

            
        </div>
    )
}

export default MatchList;