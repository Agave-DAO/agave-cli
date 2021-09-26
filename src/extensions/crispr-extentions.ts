import { EVMcrispr } from '@commonsswarm/evmcrispr'
import { ethers } from 'ethers'
import config from '../../gardner.config.json'
import { useFrame } from './web3-extentions'
import report from 'yurnalist'
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

const daoCache = async () => {
  const evm = await EVMcrispr.create(useFrame(), config.daos.agave);
  return evm.appCache
}

export const getDaoContext = cache => {
  const context = []
  for (let [key, value] of cache) {
    context.push({
      name: key,
      value: new ethers.Contract(value.address, value.abi, useFrame())
    })
  }
  return context
}

const delay = ms => new Promise(res => setTimeout(res, ms));
export const getDaoCache = (numberOfRetry) => {
  return daoCache().catch(error => {
      report.error('Error fetching DAO cache')
    if(numberOfRetry > 0) {
        report.warn('retrying in 5 seconds')
      return delay(5000).then(() => getDaoCache(numberOfRetry - 1));
    }
  });
}