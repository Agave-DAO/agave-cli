import '@nomiclabs/hardhat-waffle'
import { task } from 'hardhat/config'
import Spinnies from 'spinnies'
import spinner from '../lib/spinner'
import inquirer from 'inquirer'
import callLendingPoolConfigurator from '../lib/EVMcrispr/callLendingPoolConfigurator'
import validate from '../lib/validateAddress'

task(
    'lp-config:config-res-as-collat',
    'Configure a reserve as collatoral'
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
            type: 'number',
            name: 'ltv',
            message:
                'ltv: The loan to value of the asset when used as collateral',
        },
        {
            type: 'number',
            name: 'liquidationThreshold',
            message:
                'liquidationThreshold: The threshold at which loans using this asset as collateral will be considered undercollateralized',
        },
        {
            type: 'number',
            name: 'liquidationBonus',
            message:
                'liquidationBonus: The bonus liquidators receive to liquidate this asset. The values is always above 100%. A value of 105% means the liquidator will receive a 5% bonus',
        },
    ])
    const args = [
        input.asset,
        input.ltv,
        input.liquidationThreshold,
        input.liquidationBonus,
    ]

    const spinnies = new Spinnies({ spinner })
    spinnies.add('1', {
        text: 'Creating Vote: configureReserveAsCollateral(address asset,uint256,uint256,uint256)',
        color: 'yellowBright',
    })

    const tx = await callLendingPoolConfigurator(
        signer,
        'configureReserveAsCollateral(address asset,uint256,uint256,uint256)',
        args,
        'configute reserve as collatoral'
    )

    spinnies.succeed('1', { text: `TX: ${tx.transactionHash}` })
})
