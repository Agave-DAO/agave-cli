import { ethers, Signer, Contract } from 'ethers'
import ethProvider from 'eth-provider'
import ethereumRegex from 'ethereum-regex'

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

export const validateAddress = () => {
    return (address: string) => {
        let test = ethereumRegex({ exact: true }).test(address)
        if (test) {
            return test
        }
        return 'Invalid address'
    }
}