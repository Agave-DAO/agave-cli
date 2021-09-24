import { GluegunToolbox } from 'gluegun'
import { ethers, Signer, Contract } from 'ethers'
import ethProvider from 'eth-provider'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.useFrame = () => {
    const provider = new ethers.providers.Web3Provider(ethProvider())
    const signer: Signer = provider.getSigner()
    return signer
  }

  toolbox.callContractFrame = async (
    address: string,
    abi: Array<any>,
    func: string,
    args: Array<string>,
    signer: Signer
  ) => {
    const contract: Contract = new ethers.Contract(address, abi, signer)
    const call = contract[func]
    const tx = await call(...args)
    return tx
  }
}
