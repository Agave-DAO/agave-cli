import { EVMcrispr } from '@commonsswarm/evmcrispr'
import { Signer } from 'ethers'
import config from '../../gardner.config.json'
import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  toolbox.callTaoAgent = async (
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

    // enable this if you want to read configuration in from
    // the current folder's package.json (in a "apiary" property),
    // apiary.config.json, etc.
    toolbox.config = {
      ...toolbox.config,
      ...toolbox.config.loadConfig('apiary', process.cwd())
    }
  }
}
