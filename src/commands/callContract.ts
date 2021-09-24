import config from "../../gardner.config.json"
import chalk from "chalk"
import inquirer from "inquirer"
import addContract from "./addContract"



const callContract = async () => {
    // 1. Get contracts strored in config
    const config_contracts = config.contracts
    const contracts = Object.keys(config_contracts).map(key => {
        return {
            name: key,
            value: config_contracts[key]
        }
    })

    // 2. Ask user for a contract
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


    if (whichContract['contract'] === 'newContract') {
        await addContract()
    }


}

export default callContract