// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract waveportal {
    uint256 totalWaves;

    constructor() {
        console.log("haloe!!!!");
    }
    
    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!!", msg.sender);
        // msg.sender = wallet address of the person who called the function
    }
     
    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!!", totalWaves);
        return totalWaves;
    }

}