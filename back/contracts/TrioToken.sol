// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TrioToken is ERC20 {
  address public owner;

  uint public rate = 500;

  constructor(
    string memory _name,
    string memory _symbol,
    uint256 _amount
  ) ERC20(_name, _symbol) {
    owner = msg.sender;
    _mint(owner, _amount * 10 ** 18);
  }

  function mint(uint256 _amount) public {
    // require(owner == msg.sender);
    _mint(owner, _amount);
  }

  function getRate() external view returns (uint) {
    return rate;
  }

  receive() external payable {
    require(msg.value != 0);
    uint amount = msg.value * rate;
    require(msg.sender == owner); // 컨트랙트를 실행한 사람이 오너다.
    _mint(owner, amount);
    // token.transfer(address(this), amount);
  }
}
