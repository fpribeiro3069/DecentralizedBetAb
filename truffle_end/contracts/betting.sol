// SPDX-License-Identifier: MIT
pragma solidity >0.4.99;

contract Betting {
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
    
    function distributePrizes(uint16 teamWinner, uint256 eventId) public {
      address payable[1000] memory winners;
      
      uint256 count = 0; 
      uint256 LoserBet = 0; 
      uint256 WinnerBet = 0;
      address add;
      uint256 bet;
      address payable playerAddress;
    
      for(uint256 i = 0; i < events[eventId].players.length; i++){
         playerAddress = events[eventId].players[i];

         if(events[eventId].playerInfo[playerAddress].teamSelected == teamWinner){
            winners[count] = playerAddress;
            count++;
         }
      }
    
      if ( teamWinner == 1){
         LoserBet = events[eventId].totalBetsTwo;
         WinnerBet = events[eventId].totalBetsOne;
      }
      else{
          LoserBet = events[eventId].totalBetsOne;
          WinnerBet = events[eventId].totalBetsTwo;
      }
    
      for(uint256 j = 0; j < count; j++){
         if(winners[j] != address(0))
            add = winners[j];
            bet = events[eventId].playerInfo[add].amountBet;
            //Transfer the money to the user
            winners[j].transfer(    (bet*(10000+(LoserBet*10000/WinnerBet)))/10000 );
      }
      
      delete events[eventId].playerInfo[playerAddress];
      delete events[eventId].players;
      
      LoserBet = 0;
      WinnerBet = 0;
      events[eventId].totalBetsOne = 0;
      events[eventId].totalBetsTwo = 0;
    }
    function AmountOne(uint256 eventId) public view returns(uint256){
       return events[eventId].totalBetsOne;
    }
    function AmountTwo(uint256 eventId) public view returns(uint256){
       return events[eventId].totalBetsTwo;
    }
}