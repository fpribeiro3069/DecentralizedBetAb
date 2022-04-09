import React from 'react';
import "./Home.css";
import { ConnectButton } from 'web3uikit';
import MatchList from './MatchList';

const Home = () => {

  return(
    <div className="body">
      <div className="navbar">
          <a className="navbar-item-main" >DecentralizedAb</a>
          <ConnectButton className="navbar-item" />
      </div>
      <MatchList />
    </div>
  )
}

export default Home;
