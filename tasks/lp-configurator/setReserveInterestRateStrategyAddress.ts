import '@nomiclabs/hardhat-waffle'
import { task } from 'hardhat/config'
import Spinnies from 'spinnies'
import spinner from '../lib/spinner'
import inquirer from 'inquirer'
import callConfigurator from '../lib/EVMcrispr/callConfigurator'
import validate from '../lib/validateAddress'

task(
    'lpc:set-res-interest-strat',
    'Set reserve interest rate strategy address'
).setAction(async (_, { ethers }) => {
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
            type: 'input',
            name: 'rateStrategyAddress',
            message:
                'rateStrategyAddress The new address of the interest strategy contract',
            validate: (answer) => validate.address(answer),
        },
    ])
    const args = [input.asset, input.rateStrategyAddress]

    const spinnies = new Spinnies({ spinner })
    spinnies.add('1', {
        text: 'Creating Vote: setReserveInterestRateStrategyAddress(address,address)',
        color: 'yellowBright',
    })

    const tx = await callConfigurator(
        signer,
        'setReserveInterestRateStrategyAddress(address,address)',
        args,
        'Set Reserve Int-Strat Address'
    )

    spinnies.succeed('1', { text: `TX: ${tx.transactionHash}` })
})
