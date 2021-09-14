import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import addresses from './addresses';
import { EVMcrispr } from '@commonsswarm/evmcrispr';
import { ThreadSpinner } from "thread-spin";
import { Signer } from "ethers";

const callLendingPoolConfigurator = async (signer: Signer, signature: string, args: Array<any>) => {
    const network = (await signer.provider.getNetwork()).name;
    const { DAO, LendingPoolConfigurator } = addresses[network];
    const evm = await EVMcrispr.create(signer, DAO);
    const tx = await evm.forward([
        evm.act('agent', LendingPoolConfigurator, signature, args)
    ], ['disputable-voting.open'], { context: signature });
    return tx
}

task("pause-protocol", "Pauses the protocol")
    .setAction(async (taskArgs, { ethers }) => {
        const signer = (await ethers.getSigners())[0];

        const spinner = new ThreadSpinner({
            text: 'Creating Vote: setPoolPause()',
            spinner: "bouncingBall"
        });
        spinner.start();

        const tx = await callLendingPoolConfigurator(signer, 'setPoolPause(bool)', [true])

        await spinner.succeed(`TX: ${tx.transactionHash}`, true);

    });

task("unpause-protocol", "Unpauses the protocol")
    .setAction(async (taskArgs, { ethers }) => {
        const signer = (await ethers.getSigners())[0];

        const spinner = new ThreadSpinner({
            text: 'Creating Vote: setPoolPause()',
            spinner: "bouncingBall"
        });
        spinner.start();

        const tx = await callLendingPoolConfigurator(signer, 'setPoolPause(bool)', [false])

        await spinner.succeed(`TX: ${tx.transactionHash}`, true);

    });

task("accounts", "Prints the list of accounts", async (taskArgs, { ethers }) => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});
