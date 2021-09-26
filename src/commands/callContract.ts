import config from "../../gardner.config.json"
import chalk from "chalk"
import inquirer from "inquirer"
import addContract from "./addContract"
import { table as confirmTable } from "../extensions/cli-extentions"
import getFunctionArgs from "./getFunctionArgs"
import { sendTransaction } from "../extensions/web3-extentions"
import { table } from "console"
import report from 'yurnalist'


const callContract = async () => {
    let abi
    let address
    let funcName
    let funcFragment
    let typeOfSigner

    // 1. Get contracts strored in config
    const config_contracts = config.contracts
    const contracts = Object.keys(config_contracts).map(key => {
        return {
            name: key,
            value: config_contracts[key]
        }
    })

    // 2. Prompt user for a contract
    const whichContract: object = await inquirer.prompt({
        type: 'list',
        name: 'contract',
        message: 'Available Contracts',
        choices: [
            ...contracts,
            new inquirer.Separator(),
            {
                name: chalk.bold.green('New Contract'),
                value: 'newContract'
            },
            new inquirer.Separator()
        ]
    })

    // 3. if new contract, call the addContract() sub command
    whichContract['contract'] === 'newContract'
        ? await addContract()
        : null

    abi = whichContract['contract'].abi
    address = whichContract['contract'].address

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
    funcFragment = whichFunction['function']
    funcName = funcFragment['name']

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
    typeOfSigner = type['ofSigner']

    // 8. Display the transaction to the user
    console.log(confirmTable(typeOfSigner, address, funcName, args).toString())

    // 9. ask confirm
    const execute: any = await inquirer.prompt({
        type: 'confirm',
        name: 'action',
        message: 'Send Transaction'
    })

    if (execute.action === false) {
        process.exit(0)
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






export default callContract