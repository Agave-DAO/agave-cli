import { ethers, Signer, Contract } from 'ethers'
import ethProvider from 'eth-provider'
import ethereumRegex from 'ethereum-regex'
import { callTaoAgent } from './crispr-extentions'
import getFuncSig from './abi-extentions'
// import { EVMcrispr } from "@commonsswarm/evmcrispr";
// import {abis, appIDs} from '../abi/apps'
// import config from '../../gardner.config.json'

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

export const sendTransaction = async (address, abi, type, fragment, args) => {
    const functionName = fragment.name
    if (type === 'local') {
        const tx = await callContractFrame(address, abi, functionName, args, useFrame())
        console.log(tx._isBigNumber ? console.log(tx.toString()) : console.log(tx))

    } else {
        await callTaoAgent(
            getFuncSig(fragment),
            address,
            args,
            functionName
        )
    }
}



// export const getDaoApp = async (appName: string, number: Number = 0) => {
//     // connect to the dao
//     // using appID get address taking into account multiple apps of same type
//     // using name get abi
//     // return new ethers contract

//     const evmcrispr = await EVMcrispr.create(useFrame(), config.daos.agave);


//     const appID =  appIDs[appName]
//     const abi = abis[appName]
//     address
//     //return new ethers.Contract()
// }