import prompts from './cli/prompts/index.mjs'
import inquirer from 'inquirer'

const mainMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.main)
    switch(result.main) {
        case 'garden':
            const gardenCommand = await gardenMenu()
            console.log(gardenCommand)
            break
        case 'lendingPool':
            await lendingPoolMenu()
            break
        case 'emergencyAgent':
            await emergencyAgentMenu()
            break
    } 
}

const gardenMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.garden)
    let selection
    switch(result.garden) {
        case 'addToken':
            selection = await inquirer.prompt(prompts.garden.addToken)
            // TODO:
            console.log('handeling..', selection)
        case 'executeVote':
            selection = await inquirer.prompt(prompts.garden.executeVote)
            // TODO:
            console.log('handeling..', selection)    
    }
}

const emergencyAgentMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.emergencyAgent)
    let selection
    switch(result.emergencyAgent){
        case 'pauseProtocol':
            selection = await inquirer.prompt(prompts.emergencyAgent.pauseProtocol)
            console.log('handeling..', selection)
        case 'unpauseProtocol':
            selection = await inquirer.prompt(prompts.emergencyAgent.unpauseProtocol)
            console.log('handeling..', selection)
    }
}

const lendingPoolMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.lendingPool)
    return result.lendingPool
}


const main = async () => {
    await mainMenu()
    console.log('done!')
}
main()
.then(() => process.exit(0))
.catch((e) => {
    console.error(e)
    process.exit(1)
})