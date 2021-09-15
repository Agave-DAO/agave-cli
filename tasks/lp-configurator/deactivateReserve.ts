import '@nomiclabs/hardhat-waffle'
import { task } from 'hardhat/config'
import Spinnies from 'spinnies'
import spinner from '../lib/spinner'
import inquirer from 'inquirer'
import callConfigurator from '../lib/EVMcrispr/callConfigurator'
import validate from '../lib/validateAddress'

task('lpc:deactivate-res', 'Deactivate Reserve asset').setAction(
    async (_, { ethers }) => {
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
            text: 'Creating Vote: dectivateReserve(address)',
            color: 'yellowBright',
        })

        const tx = await callConfigurator(
            signer,
            'activateReserve(address)',
            args,
            'Dectivate Reserve'
        )

        spinnies.succeed('1', { text: `TX: ${tx.transactionHash}` })
    }
)
