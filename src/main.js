import prompts from './cli/prompts/index.mjs'
import inquirer from 'inquirer'

const mainMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.main)
    return result.main
}

const gardenMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.garden)
    return result.garden
}

const lendingPoolMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.lendingPool)
    return result.lendingPool
}

const emergencyAgentMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.emergencyAgent)
    return result.emergencyAgent
}

const main = async () => {
    const option = await mainMenu()
    console.log(option)
    switch(option) {
        case 'garden':
            await gardenMenu()
            break
        case 'lendingPool':
            await lendingPoolMenu()
            break
        case 'emergencyAgent':
            await emergencyAgentMenu()
            break
    } 
    console.log('done!')
}
main()
.then(() => process.exit(0))
.catch((e) => {
    console.error(e)
    process.exit(1)
})