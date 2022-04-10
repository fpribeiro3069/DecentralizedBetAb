import React from 'react';
import "./Home.css";
import MatchList from './MatchList';
import { Navbar } from 'react-bootstrap';
import { Button, ConnectButton } from 'web3uikit';
import { useWeb3ExecuteFunction, ErrorMessage } from "react-moralis";
import { placeBet, getMoney } from '../wrapper';

const Home = () => {

  return(
    <>
      <Navbar className='navbar' bg="primary">
        <div href="#home" className='navbar-item'>Bet3</div>
        <div className="container-button">
          <ConnectButton className='connect' />
        </div>
      </Navbar>
      <MatchList />
    </>
  )
}

export default Home;
