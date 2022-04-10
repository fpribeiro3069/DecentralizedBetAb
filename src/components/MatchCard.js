import React, { useState } from 'react';
import './MatchCard.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { getMoney } from '../wrapper.js';

const MatchCard = ({ match, setBetting, setActiveMatch, setActiveTeam, setActiveTeamId }) => {
    const onClick = (team, id) => {
        setBetting(true);
        setActiveMatch(match.id);
        setActiveTeam(team);
        setActiveTeamId(id);
    }
    const checkBet = () =>{
        var winnerTeam = 0;
        if(match.scores[0].score > match.scores[1].score){
            winnerTeam = 1;
        }else{
            winnerTeam = 2;
        }
        getMoney(winnerTeam, match.id);
    }

    return (
        <>
            <Card className="shadow p-3 mb-5 bg-white rounded card">
                <Card.Body className='cardBody'>
                    <Button size="lg" className="button-primary" onClick={() => { onClick(match.home_team, 1); } }>{match.home_team}</Button>
                        <Card.Text className="text"> vs </Card.Text>
                    <Button size="lg" className="button-primary"  onClick={() => { onClick(match.away_team, 2); }}>{match.away_team}</Button>
                </Card.Body>
                {match.completed && <Button size="sm" className="button-primary" onClick={checkBet}>Check!</Button>}
                </Card>
        </>
    )
};

export default MatchCard;