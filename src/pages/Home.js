import React from 'react';
import "./Home.css";
import MatchList from './MatchList';
import { Button, ConnectButton } from 'web3uikit';
import { useWeb3ExecuteFunction, ErrorMessage } from "react-moralis";
import { placeBet } from '../wrapper';

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
