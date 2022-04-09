import React from 'react';
import "./Home.css";
import { Button, ConnectButton } from 'web3uikit';
import { useWeb3ExecuteFunction, ErrorMessage } from "react-moralis";
import { placeBet } from '../wrapper';

const Home = () => {

  return(
    <>
    <div>
      <ConnectButton />
      <Button onClick={placeBet} />
    </div>
    </>
  )
}

export default Home;
