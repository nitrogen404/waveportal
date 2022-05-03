// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract waveportal {
    uint256 totalWaves;
    
    event NewWave(
        address indexed from, 
        uint256 timestamp, 
        string message
    );

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves; // array of type Wave with name waves

    constructor() {
        console.log(" ");
    }
    

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s waved with message %s", msg.sender, _message);
        waves.push(Wave(msg.sender, _message, block.timestamp));
        emit NewWave(msg.sender, block.timestamp, _message);

        
    }
    
    function getAllWaves() public view returns(Wave[] memory) {
        return waves;
    }
    
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!!", totalWaves);
        return totalWaves;
    }

}