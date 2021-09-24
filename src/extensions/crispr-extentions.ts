import { EVMcrispr } from '@commonsswarm/evmcrispr'
import { Signer } from "@ethersproject/abstract-signer"
import config from '../../gardner.config.json'

export const callTaoAgent = async (
    signer: Signer,
    signature: string,
    TO: string,
    args: Array<any>,
    context: string
  ) => {
    const DAO = config.daos.agave
    const evm = await EVMcrispr.create(signer, DAO)
    await evm.forward(
      [evm.act('agent:1', TO, signature, args)],
      ['disputable-voting.open'],
      { context }
    )
  }