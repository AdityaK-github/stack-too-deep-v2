// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds = 0;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) Ownable(msg.sender) {}

    function mint(address recipient, string memory uri) public onlyOwner returns (uint256) {
        require(recipient != address(0), "Cannot mint to zero address");
        require(bytes(uri).length > 0, "URI must not be empty");
        
        uint256 newItemId = _tokenIds;
        _tokenIds++;
        
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, uri);
        
        return newItemId;
    }   

    function transferNFT(address to, uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "You are not the owner");
        _transfer(msg.sender, to, tokenId);
    }

    function sendETH(address payable recipient) public payable {
        require(msg.value > 0, "Must send some ETH");
        recipient.transfer(msg.value);
    }

    receive() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

