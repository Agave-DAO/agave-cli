import { ethers, Signer, Contract } from 'ethers'
import ethProvider from 'eth-provider'
import ethereumRegex from 'ethereum-regex'
import { callTaoAgent } from './crispr-extentions'
import getFuncSig from './abi-extentions'
import report from 'yurnalist'
import { Result } from '@ethersproject/abi'
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
        report.command(tx)

    } else {
        await callTaoAgent(
            getFuncSig(fragment),
            address,
            args,
            functionName
        )
    }
}

export const getCollateralRequirement = async (agreement: Contract, disputableVoting: Contract) => {
    const events = await filterContractEvents(
        agreement,
        "CollateralRequirementChanged"
    );

    const lastEvent = events
        .filter(({ args }) => addressesEqual(args.disputable, disputableVoting.address))
        .pop();

    if (!lastEvent) {
        throw new Error("Collateral requeriment id not found");
    }
    return await agreement.getCollateralRequirement(
        disputableVoting.address,
        lastEvent.args.collateralRequirementId
    );
}

export const filterContractEvents = (
    contract: Contract,
    selectedFilter: string,
    transactionHash?: string
): Promise<Result> => {
    return new Promise((resolve, reject) => {
        const filter = contract.filters[selectedFilter];

        if (!filter) {
            reject(new Error(`Selected filter ${selectedFilter} doesn't exists`));
        }

        contract
            .queryFilter(filter())
            .then((events) => {
                if (transactionHash) {
                    const filteredEvent = events.filter(
                        (event) => event.transactionHash === transactionHash
                    );
                    resolve(filteredEvent[0]?.args);
                } else {
                    resolve(events);
                }
            })
            .catch((err) => reject(err));
    });
};

export const addressesEqual = (first, second) => {
    first = first && ethers.utils.getAddress(first);
    second = second && ethers.utils.getAddress(second);
    return first === second;
};

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