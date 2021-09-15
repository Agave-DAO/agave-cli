import '@nomiclabs/hardhat-waffle'
import { task } from 'hardhat/config'
import Spinnies from 'spinnies'
import spinner from '../lib/spinner'
import inquirer from 'inquirer'
import callLendingPoolConfigurator from '../lib/EVMcrispr/callLendingPoolConfigurator'
import validate from '../lib/validateAddress'

task(
    'lp-config:enable-res-stable-rate',
    'Enable reserve stable rate'
).setAction(async (_, { ethers }) => {
    const signer = (await ethers.getSigners())[0]
    const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'asset',
            message:
                'asset: The address of the underlying asset of the reserve',
            validate: (answer: string) => validate.address(answer),
        },
    ])
    const args = [input.asset]

    const spinnies = new Spinnies({ spinner })
    spinnies.add('1', {
        text: 'Creating Vote: enableReserveStableRate(address)',
        color: 'yellowBright',
    })

    const tx = await callLendingPoolConfigurator(
        signer,
        'enableReserveStableRate(address)',
        args,
        'enable reserve stable rate'
    )

    spinnies.succeed('1', { text: `TX: ${tx.transactionHash}` })
})
