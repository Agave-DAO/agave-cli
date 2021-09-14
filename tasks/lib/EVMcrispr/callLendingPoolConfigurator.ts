import { EVMcrispr } from '@commonsswarm/evmcrispr'
import { Signer } from 'ethers'
import addresses from '../../../constants/addresses'

const callLendingPoolConfigurator = async (
    signer: Signer,
    signature: string,
    args: Array<any>
) => {
    const network = (await signer.provider.getNetwork()).name
    const { DAO, LendingPoolConfigurator } = addresses[network]

    const evm = await EVMcrispr.create(signer, DAO)
    const tx = await evm.forward(
        [evm.act('agent', LendingPoolConfigurator, signature, args)],
        ['disputable-voting.open'],
        { context: signature }
    )
    return tx
}

export default callLendingPoolConfigurator
