import Spinnies from 'spinnies'
import spinner from '../spinner'
import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-waffle'
import callLendingPoolConfigurator from '../lib/EVMcrispr/callLendingPoolConfigurator'

task('emergency:pause', 'Pauses the protocol').setAction(
    async (_, { ethers }) => {
        const signer = (await ethers.getSigners())[0]
        const spinnies = new Spinnies({ spinner })

        spinnies.add('1', {
            text: 'Creating Vote: setPoolPause(bool)',
            color: 'yellowBright',
        })

        const tx = await callLendingPoolConfigurator(
            signer,
            'setPoolPause(bool)',
            [true],
            'Pause Protocol'
        )

        spinnies.succeed('1', { text: `TX: ${tx.transactionHash}` })
    }
)
