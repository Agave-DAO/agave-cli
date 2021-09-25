import { EVMcrispr } from "@commonsswarm/evmcrispr";
import { useFrame } from '../src/extensions/web3-extentions'
import config from "../gardner.config.json";
//import report from 'yurnalist'
import { ethers } from "ethers";
import inquirer from "inquirer";

const appsPrompt = cache => {
    const prompt = []
    for (let [key, value] of cache) {
        prompt.push({
            name: key,
            value: value.abi
        })
    }
    return prompt
}

const daoContext = cache => {
    const context = []
    for (let [key, value] of cache) {
        context.push({
            name: key,
            value: new ethers.Contract(value.address, value.abi, useFrame())
        })
    }
    return context
}

const run = async () => {
    const evm = await EVMcrispr.create(useFrame(), config.daos.agave);
    const cache = evm.appCache

    const prompt = appsPrompt(cache)
    await inquirer.prompt({
        name: 'apps',
        type: 'list',
        choices: prompt
    })

    const contracts = daoContext(cache)
    console.log(contracts)


}
run()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })