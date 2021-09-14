import hre from 'hardhat'
import addresses from '../constants/addresses'

async function main() {
    const network = hre.network.name
    const agent = addresses[network].TaoAgent
    const MLendingPool = await hre.ethers.getContractFactory('LendingPoolMock')
    const lendingPool = await MLendingPool.deploy(agent)
    await lendingPool.deployed()
    console.log('LendingPool deployed to:', lendingPool.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
