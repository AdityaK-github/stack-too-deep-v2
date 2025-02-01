import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      chainId: 31337, 
    },
    localhost: {
      url: "http://127.0.0.1:8545", // Hardhat local network URL
      // accounts: ["<your private key>"], 
    },
  },
  etherscan: {
    // You can add your API key for Etherscan if you're verifying contracts
    // apiKey: "<your etherscan api key>",
  },
};

export default config;
