import React from 'react';
import "./Home.css";
import { Button, ConnectButton } from 'web3uikit';
import { useWeb3ExecuteFunction, ErrorMessage } from "react-moralis";
import { placeBet, getMoney } from '../wrapper';

const Home = () => {

  return(
    <>
    <div>
      <ConnectButton />
      <Button onClick={placeBet} />
      <Button onClick={getMoney} />
      
    </div>
    </>
  )
}

export default Home;
