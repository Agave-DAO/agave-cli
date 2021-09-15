import hre from 'hardhat'
import addresses from '../constants/addresses'
import Spinnies from 'spinnies'
import spinner from '../tasks/lib/spinner'
import { Transaction } from '@ethersproject/transactions'
import { TransactionReceipt } from '@ethersproject/abstract-provider'

async function main() {
    const network = hre.network.name
    const TaoAgent = addresses[network].TaoAgent
    const EmergencyAgent = addresses[network].EmergencyAgent

    const spinnies = new Spinnies({ spinner })
    spinnies.add('1', {
        text: 'Deploying: LendingPoolAddressesProvider',
        color: 'yellowBright',
    })

    const LendingPoolAddressesProvider = await hre.ethers.getContractFactory(
        'LendingPoolAddressesProvider'
    )
    const addressProvider = await LendingPoolAddressesProvider.deploy(1)
    await addressProvider.deployed()
    spinnies.succeed('1', {
        text: `LendingPoolAddressesProvider deployed to ${addressProvider.address}`,
    })

    spinnies.add('2', {
        text: 'Deploying: LendingPoolConfigurator',
        color: 'yellowBright',
    })
    const LendingPoolConfigurator = await hre.ethers.getContractFactory(
        'LendingPoolConfigurator'
    )
    const lendingPool = await LendingPoolConfigurator.deploy()
    await lendingPool.deployed()
    await lendingPool.initialize(addressProvider.address)
    spinnies.succeed('2', {
        text: `LendingPoolConfigurator deployed to      ${lendingPool.address}`,
    })

    spinnies.add('3', {
        text: 'Setting: PoolAdmin',
        color: 'yellowBright',
    })
    await addressProvider.setPoolAdmin(TaoAgent)
    spinnies.succeed('3', { text: `Done!` })

    spinnies.add('4', {
        text: 'Setting: EmergencyAdmin',
        color: 'yellowBright',
    })
    await addressProvider.setEmergencyAdmin(EmergencyAgent)
    spinnies.succeed('4', { text: `Done!` })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
