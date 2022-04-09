import { React } from 'react';
import './MatchCard.css';

const MatchCard = ({ match, onClick }) => {
    return (
        <div className='card'>
            <button className="button-primary" onClick={() => onClick(match.home_team)}>{match.home_team}</button>
            vs
            <button className="button-secondary" onClick={() => onClick(match.away_team)}>{match.away_team}</button>
        </div>
    )
};

export default MatchCard;