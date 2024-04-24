// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.20;

contract Mariage {
    address public conjoint1;
    address public conjoint2;
    address[] public childrens;
    string public status = "Mari\u00E9";

    event MariageContractCreated(address indexed conjoint1, address indexed conjoint2);
    event DivorceContract(address indexed conjoint1, address indexed conjoint2);
    event ChildAdded(address child);

    constructor(address _conjoint1, address _conjoint2) {
        conjoint1 = _conjoint1;
        conjoint2 = _conjoint2;

        emit MariageContractCreated(conjoint1, conjoint2);
    }

    function divorce() public {
        require(msg.sender == conjoint1 || msg.sender == conjoint2, "You aren't part of this marriage");
        require(keccak256(abi.encodePacked(status)) == keccak256(abi.encodePacked("Mari\u00E9")), "This marriage is already divorced");

        status = "Divorc\u00E9";
    }

    function getConjoints() public view returns (address, address) {
        return (conjoint1, conjoint2);
    }

    function getConjoint1() public view returns (address) {
        return conjoint1;
    }

    function getConjoint2() public view returns (address) {
        return conjoint2;
    }

    function getConjointOf(address conjoint) public view returns (address) {
        require(conjoint == conjoint1 || conjoint == conjoint2, "This address isn't part of this marriage");

        if(conjoint == conjoint1) {
            return conjoint2;
        } else {
            return conjoint1;
        }
    }

    function addChild(address _child) public {
        require(_child != conjoint1 && _child != conjoint2, "This address is already part of this marriage");

        childrens.push(_child);

        emit ChildAdded(_child);
    }

    function getChildrens() public view returns (address[] memory) {
        return childrens;
    }
}
    