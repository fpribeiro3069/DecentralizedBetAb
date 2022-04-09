import React, { useState } from 'react';
import './MatchCard.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const MatchCard = ({ match, setBetting, setActiveMatch, setActiveTeam, setActiveTeamId }) => {
    const onClick = (team, id) => {
        setBetting(true);
        setActiveMatch(match.id);
        setActiveTeam(team);
        setActiveTeamId(id);
    }

    return (
        <>
            <Card className="shadow p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Button size="lg" className="button-primary" onClick={() => { onClick(match.home_team, 1); } }>{match.home_team}</Button>
                        <Card.Text className="text"> vs </Card.Text>
                    <Button size="lg" className="button-primary"  onClick={() => { onClick(match.away_team, 2); }}>{match.away_team}</Button>
                </Card.Body>
                </Card>
        </>
    )
};

export default MatchCard;