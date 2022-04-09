import React from 'react';
import "./Home.css";
import { ConnectButton } from 'web3uikit';
import MatchList from './MatchList';
import {Navbar, Nav, Button} from 'react-bootstrap';

const Home = () => {

  return(
    <>
      <Navbar className='navbar' bg="primary">
        <Navbar.Brand href="#home">DecentralizedAb</Navbar.Brand>
        <div class="container-button">
          <ConnectButton className='connect' />
        </div>
      </Navbar>
      <MatchList />
    </>
  )
}

export default Home;
