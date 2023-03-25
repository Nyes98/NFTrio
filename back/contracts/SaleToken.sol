// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./CharacterToken.sol";
import "./TrioToken.sol";

contract SaleToken {
  CharacterToken public Token;
  TrioToken public SecondToken;

  // _tokenAddress => characterToken의 CA
  // _secondToken => TrioToken의 CA
  constructor(address _tokenAddress, address _secondToken) {
    Token = CharacterToken(_tokenAddress);
    SecondToken = TrioToken(payable(_secondToken));
  }

  struct TokenInfo {
    uint tokenId;
    uint price;
    string tokenURI;
  }

  mapping(uint => uint) public tokenPrices;
  // uint => uint = 키 => 값
  uint[] public SaleTokenList;

  // push 메서드를 사용하기 위함

  function SalesToken(uint _tokenId, uint _price) public {
    address tokenOwner = Token.ownerOf(_tokenId);

    require(tokenOwner == msg.sender);
    require(_price > 0);
    require(Token.isApprovedForAll(msg.sender, address(this)));

    tokenPrices[_tokenId] = _price;
    //tokenPrices의 _tokenId라는 키의 값이 _price다. 그리고 얘는 위에서 mapping으로 uint => uint해놨으니까 _tokenId랑 _price 둘 다 uint256
    SaleTokenList.push(_tokenId);
  }

  function PurchaseToken(uint _tokenId) public payable {
    address tokenOwner = Token.ownerOf(_tokenId);

    // require(tokenOwner != msg.sender);
    // require(tokenPrices[_tokenId] > 0);
    // require(tokenPrices[_tokenId] <= msg.value);

    // payable(tokenOwner).transfer(msg.value);
    // Token.transferFrom(tokenOwner, msg.sender, _tokenId);

    // tokenPrices[_tokenId] = 0;
    // popSaleToken(_tokenId);
    require(tokenPrices[_tokenId] > 0, "not sales");
    // 구매하려는 CharacterToken이 판매중인지 확인
    require(
      tokenPrices[_tokenId] <= SecondToken.balanceOf(msg.sender),
      "not enough price"
    );
    // SecondToken.approve(address(this), tokenPrices[_tokenId]);
    // 03.24 기준으로 얘 주석처리하고(60번 줄)
    // 구매하려는 CharacterToken의 판매 가격보다 많은 토큰을 가지고있는지(구매에 필요한 금액을 보유하고있는지) 확인
    // solidity와 front 둘 다 처리해서 교차검증이 필요한 부분
    SecondToken.transferFrom(msg.sender, tokenOwner, tokenPrices[_tokenId]);
    // 구매자가 판매자에게 돈을 준다.
    Token.transferFrom(tokenOwner, msg.sender, _tokenId);
    // sale 토큰이 권한을 위임받아 가지고 있던 CharacterToken을 구매자에게 전달한다.
    popSaleToken(_tokenId);
  }

  function cancelSaleToken(uint _tokenId) public {
    address tokenOwner = Token.ownerOf(_tokenId);

    require(tokenOwner == msg.sender);
    require(tokenPrices[_tokenId] > 0);

    tokenPrices[_tokenId] = 0;
    popSaleToken(_tokenId);
  }

  function popSaleToken(uint _tokenId) private returns (bool) {
    for (uint i = 0; i < SaleTokenList.length; i++) {
      if (SaleTokenList[i] == _tokenId) {
        SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
        SaleTokenList.pop();
        return true;
      }
    }
    return false;
  }

  function getSaleTokenList() public view returns (TokenInfo[] memory) {
    require(SaleTokenList.length > 0);

    TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length);

    for (uint i = 0; i < SaleTokenList.length; i++) {
      uint tokenId = SaleTokenList[i];
      uint price = tokenPrices[tokenId];
      string memory tokenURI = Token.tokenURI(tokenId);

      list[i] = TokenInfo(tokenId, price, tokenURI);
    }
    return list;
  }

  function getOwnerTokens(
    address _tokenOwner
  ) public view returns (TokenInfo[] memory) {
    uint balance = Token.balanceOf(_tokenOwner);
    require(balance > 0);

    TokenInfo[] memory list = new TokenInfo[](balance);

    for (uint i = 0; i < balance; i++) {
      uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
      uint price = tokenPrices[tokenId];
      string memory tokenURI = Token.tokenURI(tokenId);

      list[i] = TokenInfo(tokenId, price, tokenURI);
    }
    return list;
  }

  function getLatestToken(
    address _tokenOwner
  ) public view returns (TokenInfo memory) {
    uint balance = Token.balanceOf(_tokenOwner);
    uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, balance - 1);
    uint price = tokenPrices[tokenId];
    string memory tokenURI = Token.tokenURI(tokenId);

    return TokenInfo(tokenId, price, tokenURI);
  }
}
