import Web3 from "web3";
const Moralis = require("moralis");

const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "teamWinner",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "distributePrizes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			},
			{
				"internalType": "uint16",
				"name": "teamWinner",
				"type": "uint16"
			}
		],
		"name": "getMoney",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kill",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_teamSelected",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "place_bet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "payee",
				"type": "address"
			}
		],
		"name": "withdrawPayments",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "AmountOne",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "AmountTwo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			}
		],
		"name": "checkPlayerExistsInEvent",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "events",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalBetsOne",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalBetsTwo",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dest",
				"type": "address"
			}
		],
		"name": "payments",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const placeBet = async function(betValue, selectedTeam, eventId) {

    await Moralis.enableWeb3();
    const options = {
        chain: "ropsten",
        contractAddress: "0x1C5d233A44580113E99A635e11b002b92b56b1bB",
        functionName: "place_bet",
        abi: ABI,
        params: { _teamSelected: selectedTeam, eventId: eventId},
        msgValue: betValue,
    };

    const transaction = await Moralis.executeFunction(options);
    console.log(transaction.hash);
    const ratings = await Moralis.Cloud.run("addNewGame", {eventId: 12});
    // --> "0x39af55979f5b690fdce14eb23f91dfb0357cb1a27f387656e197636e597b5b7c"
}

export const getMoney = async function() {

    await Moralis.enableWeb3();
    const options = {
        chain: "ropsten",
        contractAddress: "0x1C5d233A44580113E99A635e11b002b92b56b1bB",
        functionName: "getMoney",
        abi: ABI,
        params: { teamWinner: 1, eventId: 1},
        
    };

    const transaction = await Moralis.executeFunction(options);
    
}