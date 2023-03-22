// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./TrioToken.sol";

contract Swap {
  TrioToken public token; // CA 받을 변수
  address public owner;

  constructor(TrioToken _token) {
    token = _token; // _token이라는 CA를 받아 token으로 정의
    owner = msg.sender;
  }

  function getToken() public view returns (address) {
    return address(token); // 이게 TrioToken이 배포될 때의 CA
  }

  // token변수가 가진 CA값을 return하는 함수

  function getSwapBalance() public view returns (uint) {
    return token.balanceOf(msg.sender);
  }

  // 함수를 호출한 계정의 토큰 잔액을 조회하는 함수

  function getThisAddress() public view returns (address) {
    return address(this); // this는 해당 컨트랙트 자체를 의미함(this = Swap)
    // address(this) == Swap의 CA
  }

  function getMsgSender() public view returns (address) {
    return msg.sender; // msg.sender == 해당 컨트랙트(Swap)를 실행한 사람
  }

  // function getTokenOwner() public view returns (address) {
  //     return token._owner();
  // }
  // 생성한 ERC20 컨트랙트(TrioToken)를 배포시킨 토큰 발행자의 계정을 return하는 함수

  function buyToken() public payable {
    uint256 tokenAmount = msg.value * token.getRate(); // 1eth = 500token
    require(token.balanceOf(address(this)) >= tokenAmount, "error [1]");
    token.transfer(msg.sender, tokenAmount); // from: Swap CA, to : msg.sender
  }
}
