import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import 'dotenv/config'

import { EVMcrispr } from '@commonsswarm/evmcrispr'





task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const config: HardhatUserConfig = {
  // Your type-safe config goes here
  solidity: {
    compilers: [{ version: "0.8.0", settings: {} }],
  },
};

export default config