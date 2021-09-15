import { EVMcrispr } from '@commonsswarm/evmcrispr'
import { Signer } from 'ethers'
import addresses from '../../../constants/addresses'

const callConfigurator = async (
    signer: Signer,
    signature: string,
    args: Array<any>,
    context: string
) => {
    const network = (await signer.provider.getNetwork()).name
    const { DAO, LendingPoolConfigurator } = addresses[network]

    const evm = await EVMcrispr.create(signer, DAO)
    const tx = await evm.forward(
        [evm.act('agent:1', LendingPoolConfigurator, signature, args)],
        ['disputable-voting.open'],
        { context }
    )

    return tx
}

export default callConfigurator
