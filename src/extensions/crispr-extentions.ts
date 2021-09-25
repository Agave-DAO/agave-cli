import { EVMcrispr } from '@commonsswarm/evmcrispr'
import { ethers } from 'ethers'
import config from '../../gardner.config.json'
import { useFrame } from './web3-extentions'

export const callTaoAgent = async (
  signature: string,
  TO: string,
  args: Array<any>,
  context: string
) => {
  const DAO = config.daos.agave
  const evm = await EVMcrispr.create(useFrame(), DAO)
  await evm.forward(
    [evm.act('agent:1', TO, signature, args)],
    ['disputable-voting.open', '0x9c11d3ebce296be3a1e48f0c096e6a011e37a9a2'],
    { context }
  )
}

export const getDaoCache = async () => {
  const evm = await EVMcrispr.create(useFrame(), config.daos.agave);
  return evm.appCache
}

export const daoContext = cache => {
  const context = []
  for (let [key, value] of cache) {
    context.push({
      name: key,
      value: new ethers.Contract(value.address, value.abi, useFrame())
    })
  }
  return context
}