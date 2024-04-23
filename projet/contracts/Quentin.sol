//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// La ligne si dessous declare un Token
contract Quentin {
    string public name = "Quentin Token";
    string public symbol = "QT";

    // La ligne ci dessous declare une variable de type uint
    uint256 public totalSupply = 1000000;

    //
    address public owner;

    mapping (address => uint256) public balance;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        balance[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 value) external {
        require(balance[msg.sender] >= value, "Insufficient balance");

        balance[msg.sender] -= value;
        balance[to] += value;

        emit Transfer(msg.sender, to, value);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balance[account];
    }
}