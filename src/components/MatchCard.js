import { React } from 'react';
import './MatchCard.css';

const MatchCard = ({ match, onClick }) => {
    return (
        <div className='card'>
            <button onClick={() => onClick(match.id, match.home_team)}>{match.home_team}</button>
            vs
            <button onClick={() => onClick(match.id, match.away_team)}>{match.away_team}</button>
        </div>
    )
};

export default MatchCard;