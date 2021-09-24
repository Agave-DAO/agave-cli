import config from "../../gardner.config.json"
import inquirer from 'inquirer'
import ethereumRegex from "ethereum-regex"
import { writeFileSync } from 'fs'
import callContract from "./callContract"

export default async () => {
    const contractResponse = await inquirer.prompt([
        {
            name: 'name',
            message: 'Enter contract name',
            type: 'input'
        },
        {
            name: 'address',
            message: 'Enter contract address',
            type: 'input',
            validate: (address: string) => {
                let test = ethereumRegex({ exact: true }).test(address)
                if (test) {
                    return test
                }
                return 'Invalid address'
            }
        },
        {
            name: 'abi',
            message: 'Enter contract ABI',
            type: 'editor'
        }
    ])

    const name = contractResponse['name']
    const address = contractResponse['address']
    const abi = contractResponse['abi']

    // save the new contract
    config.contracts[name] = {
        address,
        abi: JSON.parse(abi)
    }
    writeFileSync('./gardner.config.json', JSON.stringify(config))

    // go back to contracts menu
    await callContract()
}