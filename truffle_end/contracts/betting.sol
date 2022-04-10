// SPDX-License-Identifier: MIT
pragma solidity >0.4.99;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/PullPayment.sol";

contract Betting is PullPayment{

  // test helper function to call asyncSend
   address payable public owner;
   
   struct Player {
      uint256 amountBet;
      uint16 teamSelected;
    }

    struct Event {
        uint256 totalBetsOne;
        uint256 totalBetsTwo;
        address payable[] players;

        mapping(address => Player) playerInfo;
    }

    mapping(uint256 => Event) public events;

   
   
    constructor() {
      owner = payable(msg.sender);
    }

    function kill() public {
      if(msg.sender == owner) selfdestruct(owner);
    }
    
    function checkPlayerExistsInEvent(address payable player, uint256 eventId) public view returns(bool){
      for(uint256 i = 0; i < events[eventId].players.length; i++){
         if(events[eventId].players[i] == player) return true;
      }
      return false;
    }
    function place_bet(uint8 _teamSelected, uint256 eventId) public payable {
      require(!checkPlayerExistsInEvent(payable(msg.sender), eventId));

      events[eventId].playerInfo[msg.sender].amountBet = msg.value;
      events[eventId].playerInfo[msg.sender].teamSelected = _teamSelected;
    
      events[eventId].players.push(payable(msg.sender));
    
      if ( _teamSelected == 1){
          events[eventId].totalBetsOne += msg.value;
      }
      else{
          events[eventId].totalBetsTwo += msg.value;
      }
    }

   function getMoney(uint256 eventId, uint16 teamWinner) public {
      //calculate prizes
      uint256 LoserBet = 0; 
      uint256 WinnerBet = 0;
      uint256 bet;
    
    
      if ( teamWinner == 1){
         LoserBet = events[eventId].totalBetsTwo;
         WinnerBet = events[eventId].totalBetsOne;
      }
      else{
          LoserBet = events[eventId].totalBetsOne;
          WinnerBet = events[eventId].totalBetsTwo;
      }
      if (WinnerBet== 0) {
         WinnerBet = 1;
      }

      if(events[eventId].playerInfo[msg.sender].teamSelected == teamWinner){
         bet = events[eventId].playerInfo[msg.sender].amountBet;

         uint256 amount = bet*(10000+(LoserBet*10000/WinnerBet))/10000;
         _asyncTransfer(msg.sender, amount);
         withdrawPayments(payable (msg.sender));
         events[eventId].playerInfo[msg.sender].amountBet = 0;
      }



   
   }

    function AmountOne(uint256 eventId) public view returns(uint256){
       return events[eventId].totalBetsOne;
    }
    function AmountTwo(uint256 eventId) public view returns(uint256){
       return events[eventId].totalBetsTwo;
    }
}