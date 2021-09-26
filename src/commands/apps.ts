import inquirer from "inquirer"
import report from "yurnalist"
import { getDaoCache, getDaoContext } from "../extensions/crispr-extentions"
import { table } from "../extensions/cli-extentions"
import getFunctionArgs from "./getFunctionArgs"
import { sendTransaction } from "../extensions/web3-extentions"


export default async () => {
    const cache = await getDaoCache(3)
    const daoContext = await getDaoContext(cache)
    const appResponce = await inquirer.prompt({
        name: 'apps',
        type: 'list',
        choices: appsPrompt(cache)
    })

    const appName = appResponce['apps']
    const appCache = cache.get(appName)
    const {abi, address} = appCache

    // TODO: Duplicate code, refactor

    // 4. parse the functions from ABI for prompts
    const abiPrompts: Array<any> = []
    abi.filter(item => {
        return item.type === 'function'
    })
        .map(func => {
            let name: string = ''
            if (func.inputs.length !== 0) {
                name += func.name + '('
                func.inputs.map((input: any) => {
                    name += input.type + ','
                })
                abiPrompts.push({ name: name.slice(0, -1) + ')', value: func })
            } else {
                abiPrompts.push({ name: func.name, value: func })
            }
        })

    // 5. Prompt user for function
    const whichFunction = await inquirer.prompt({
        type: 'list',
        name: 'function',
        message: 'Avalible functions',
        choices: abiPrompts
    })
    const funcFragment = whichFunction['function']
    const funcName = funcFragment['name']

    // 6. Prompt user for arguments
    const args = await getFunctionArgs(funcFragment)

    // 7. Prompt user for execution context
    const type: any = await inquirer.prompt({
        type: 'list',
        name: 'ofSigner',
        message: 'Who will execute this action?',
        choices: [
            {
                name: 'Agave Garden',
                value: 'agave'
            },
            {
                name: 'Local Frame Account',
                value: 'local'
            }
        ]
    })
    const typeOfSigner = type['ofSigner']

    // 8. Display the transaction to the user
    console.log(table(typeOfSigner, address, funcName, args).toString())

    // 9. ask confirm
    const execute: any = await inquirer.prompt({
        type: 'confirm',
        name: 'action',
        message: 'Send Transaction'
    })

    if (execute.action === false) {
        return 'main'
    }

    // 10. submit transaction
    const spinner = report.activity()
    try {
        spinner.tick('Sending Transaction...')
        await sendTransaction(address, abi, typeOfSigner, funcFragment, args)
        spinner.end()
    } catch (error) {
        if (error.status !== undefined) {
            report.error(error.reason)
            console.log(
                `https://dashboard.tenderly.co/tx/rinkeby/${error.transactionHash}`
            )
        } else {
            report.error('Failed for some reason...')
            report.inspect(error)
        }
        process.exit(1)
    }

    
    return 'main'
}

const appsPrompt = cache => {
    const prompt = []
    for (let [key, value] of cache) {
        prompt.push({
            name: key,
            value: key
        })
    }
    return prompt
}