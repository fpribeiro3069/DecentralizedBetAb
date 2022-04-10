import React from 'react';
import "./Home.css";
import MatchList from './MatchList';
import { ConnectButton } from 'web3uikit';
import { Navbar } from 'react-bootstrap';

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
