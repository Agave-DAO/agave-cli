import '@nomiclabs/hardhat-waffle'
import { task } from 'hardhat/config'
import Spinnies from 'spinnies'
import spinner from '../spinner'
import inquirer from 'inquirer'
import callLendingPoolConfigurator from '../lib/EVMcrispr/callLendingPoolConfigurator'
import validate from '../lib/validateAddress'

task('lp-config:set-res-factor', 'Set reserve factor').setAction(
    async (_, { ethers }) => {
        const signer = (await ethers.getSigners())[0]
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'asset',
                message:
                    'asset: The address of the underlying asset of the reserve',
                validate: (answer) => validate.address(answer),
            },
            {
                type: 'number',
                name: 'reserveFactor',
                message: 'reserveFactor: The new reserve factor of the reserve',
            },
        ])
        const args = [input.asset, input.reserveFactor]

        const spinnies = new Spinnies({ spinner })
        spinnies.add('1', {
            text: 'Creating Vote: setReserveFactor(address,uint256)',
            color: 'yellowBright',
        })

        const tx = await callLendingPoolConfigurator(
            signer,
            'setReserveFactor(address,uint256)',
            args,
            'Set Reserve Factor'
        )

        spinnies.succeed('1', { text: `TX: ${tx.transactionHash}` })
    }
)
