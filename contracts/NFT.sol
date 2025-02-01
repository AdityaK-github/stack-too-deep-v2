// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds = 0;
    
    event Mint(address indexed recipient, uint256 indexed tokenId, string uri);
    mapping (address => uint[]) ownerToTokens;
    mapping (address => string[]) ownerToTokenURI;

    constructor() ERC721("MyNFTCollection", "MNFT") Ownable(msg.sender) {}

    function mint(address recipient, string memory uri) public onlyOwner returns (uint256) {
        require(recipient != address(0), "Cannot mint to zero address");
        require(bytes(uri).length > 0, "URI must not be empty");
        
        uint256 newItemId = _tokenIds;
        _tokenIds++;
        
        _mint(recipient, newItemId); 
        _setTokenURI(newItemId, uri); 
        
        ownerToTokens[recipient].push(newItemId);
        ownerToTokenURI[recipient].push(uri);
        emit Mint(recipient, newItemId, uri);
        
        return newItemId;
    }


    function getOwnerNftUri(address owner) public view returns (string[] memory) {
        return ownerToTokenURI[owner];
    }

    function transferNFT(address to, uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "You are not the owner");
        safeTransferFrom(msg.sender, to, tokenId);
        
        _removeNFTFromOwner(msg.sender, tokenId);
        
        _addNFTToOwner(to, tokenId);
    }

    function _removeNFTFromOwner(address owner, uint256 tokenId) internal {
        uint256[] storage tokens = ownerToTokens[owner];
        uint256 index = _findTokenIndex(tokens, tokenId);

        tokens[index] = tokens[tokens.length - 1];
        tokens.pop();

        string[] storage uris = ownerToTokenURI[owner];
        uris[index] = uris[uris.length - 1];
        uris.pop();
    }

    function _addNFTToOwner(address owner, uint256 tokenId) internal {
        ownerToTokens[owner].push(tokenId);

        string memory tokenUri = tokenURI(tokenId);
        ownerToTokenURI[owner].push(tokenUri);
    }

    function _findTokenIndex(uint256[] storage tokens, uint256 tokenId) internal view returns (uint256) {
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == tokenId) {
                return i;
            }
        }
        revert("Token not found");
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
