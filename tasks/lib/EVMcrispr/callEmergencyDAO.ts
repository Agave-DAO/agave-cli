import { EVMcrispr } from '@commonsswarm/evmcrispr'
import { Signer } from 'ethers'
import addresses from '../../../constants/addresses'

const callEmergencyDAO = async (
    signer: Signer,
    signature: string,
    args: Array<any>,
    context: string
) => {
    const network = (await signer.provider.getNetwork()).name
    const { EmergencyDAO, LendingPoolConfigurator } = addresses[network]

    const evm = await EVMcrispr.create(signer, EmergencyDAO)
    const tx = await evm.forward(
        [evm.act('agent', LendingPoolConfigurator, signature, args)],
        ['voting'],
        { context }
    )
    return tx
}

export default callEmergencyDAO
