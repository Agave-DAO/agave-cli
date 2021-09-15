import Spinnies from 'spinnies'
import spinner from '../lib/spinner'
import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'
import callConfigurator from '../lib/EVMcrispr/callConfigurator'

task('emergency:unpause', 'Unpauses the protocol').setAction(
    async (_, { ethers }) => {
        const signer = (await ethers.getSigners())[0]
        const spinnies = new Spinnies({ spinner })

        spinnies.add('1', {
            text: 'Creating Vote: setPoolPause(bool)',
            color: 'yellowBright',
        })

        const tx = await callConfigurator(
            signer,
            'setPoolPause(bool)',
            [false],
            'Unpause Protocol'
        )

        spinnies.succeed('1', { text: `TX: ${tx.transactionHash}` })
    }
)
