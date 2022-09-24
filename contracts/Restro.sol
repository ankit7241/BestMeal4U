//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract RestaurantDapp {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function sendMoney() external payable {
        owner.transfer(msg.value);
    }

    function getOwnerBalance() public view returns (uint256) {
        return owner.balance;
    }
}
