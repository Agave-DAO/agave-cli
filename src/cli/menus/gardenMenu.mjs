import prompts from '../prompts/index.mjs'
import inquirer from 'inquirer'
import gardenHandlers from '../handlers/gardenHandlers.mjs'

const gardenMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.garden)
    let selection
    switch (result.garden) {
        case 'addToken':
            selection = await inquirer.prompt(prompts.garden.addToken)
            await gardenHandlers.addToken(selection)
            break
        case 'executeVote':
            selection = await inquirer.prompt(prompts.garden.executeVote)
            await gardenHandlers.executeVote(selection)
            break
        case 'taoTransfer':
            selection = await inquirer.prompt(prompts.garden.taoTransfer)
            await gardenHandlers.taoTransfer(selection)
            break
    }
}

export default gardenMenu
