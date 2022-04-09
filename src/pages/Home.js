import React from 'react';
import "./Home.css";
import { ConnectButton } from 'web3uikit';
import MatchList from './MatchList';

const Home = () => {

  return(
    <>
    <div>
      <ConnectButton />
      <MatchList />
    </div>
    </>
  )
}

export default Home;
