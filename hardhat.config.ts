import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@vechain/sdk-hardhat-plugin";
import "solidity-coverage";

const VECHAIN_URL_SOLO = "http://localhost:8669";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

module.exports = {
  solidity: {
    version: "0.8.20",
    evmVersion: "paris",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 180000,
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    vechain_solo: {
      url: VECHAIN_URL_SOLO,
      accounts: {
        mnemonic:
          "denial kitchen pet squirrel other broom bar gas better priority spoil cross",
        count: 10,
        path: "m/44'/818'/0'/0",
      },
      restful: true,
      gas: 10000000,
      count: 10,
    },
  },
};

export default config;
