import { HardhatUserConfig } from "hardhat/config";
import "hardhat-typechain";
import "@tenderly/hardhat-tenderly"
import "@nomiclabs/hardhat-waffle";
import 'dotenv/config'
import './tasks'



/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const config: HardhatUserConfig = {
  // Your type-safe config goes here
  solidity: {
    compilers: [{ version: "0.8.0", settings: {} }],

  },
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY,
      accounts: {
        mnemonic: process.env.SEED
      }
    }
  },
  tenderly: {
    project: "agave-cli",
    username: "greenhornet",
  }
};

export default config