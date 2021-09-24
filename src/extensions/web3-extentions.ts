import { ethers, Signer, Contract } from 'ethers'
import ethProvider from 'eth-provider'

export const useFrame = () => {
    const provider = new ethers.providers.Web3Provider(ethProvider())
    const signer: Signer = provider.getSigner()
    return signer
}

export const callContractFrame = async (
    address: string,
    abi: Array<any>,
    func: string,
    args: Array<string>,
    signer: Signer
) => {
    const contract: Contract = new ethers.Contract(address, abi, signer)
    return (await contract[func](...args))
}