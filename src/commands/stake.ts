import { Contract, ethers } from "ethers"
import { getDaoCache, getDaoContext } from "../extensions/crispr-extentions"
import { getCollateralRequirement, useFrame } from "../extensions/web3-extentions"
import Table from 'cli-table3'
import report from 'yurnalist'

import ERC20Abi from '../abi/ERC20.json'
import StakingAbi from '../abi/Staking.json'
import StakingFactoryAbi from '../abi/StakingFactory.json'

export default async () => {
    const signerAddress = await useFrame().getAddress()
    const cache = await getDaoCache(3)
    const context = getDaoContext(cache)

    // contracts
    const tokenManager: Contract = context['wrappable-hooked-token-manager.open:0']
    const agreement: Contract = context['agreement.open:0']  
    const disputableVoting: Contract = context['disputable-voting.open:0']
    const token: Contract = new ethers.Contract((await tokenManager.token()), ERC20Abi, useFrame())
    const stakingFactory: Contract = new ethers.Contract((await agreement.stakingFactory()), StakingFactoryAbi, useFrame())
    const staking: Contract = new ethers.Contract((await stakingFactory.getInstance(token.address)), StakingAbi, useFrame())

    const tokenSymbol = await token.symbol()
    const tokenBalance = await token.balanceOf(signerAddress)
    const totalStaked = await staking.totalStakedFor(signerAddress)
    const collateralRequirement = await getCollateralRequirement(agreement, disputableVoting)

    const table = new Table()

    // table.push(
    //     ['Signer Address', signerAddress],
    //     [`${tokenSymbol} Balance: `, tokenBalance.toString()],
    //     [`${tokenSymbol} Staked: `, totalStaked.toString()],
    //     [`Collateral Requirement: `, collateralRequirement.toString()]
    // )
    // console.log(table.toString())

    // display address
    // current balance
    // current staked
    // collatoral requirement

    // ask stake (y/n)

    // ask how much

    // approve tokens for staking contract

    // send tokens to staking 
    
    return 'main'
}