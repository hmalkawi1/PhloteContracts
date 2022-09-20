import { HardhatUserConfig } from "hardhat/config";
import '@nomicfoundation/hardhat-toolbox';
import "@nomiclabs/hardhat-ethers";
import "chai"
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  }
};

export default config;
