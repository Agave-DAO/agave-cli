import prompts from './cli/prompts/index.mjs'
import inquirer from 'inquirer'
import gardenMenu from './cli/menus/gardenMenu.mjs'
import { emergencyAgentMenu } from './cli/menus/emergencyAgentMenu.mjs'
import { lendingPoolMenu } from './cli/menus/lendingPoolMenu.mjs'

const main = async () => {
  const result = await inquirer.prompt(prompts.menu.main)
  switch (result.main) {
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
