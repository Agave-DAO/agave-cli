import prompts from '../prompts/index.mjs'
import inquirer from 'inquirer'
import { emergencyAgentHandlers } from '../handlers/emergencyAgentHandlers.mjs'

export const emergencyAgentMenu = async () => {
  const result = await inquirer.prompt(prompts.menu.emergencyAgent)
  let selection
  switch (result.emergencyAgent) {
    case 'pauseProtocol':
      selection = await inquirer.prompt(prompts.emergencyAgent.pauseProtocol)
      await emergencyAgentHandlers.pause(selection)
      break
    case 'unpauseProtocol':
      selection = await inquirer.prompt(prompts.emergencyAgent.unpauseProtocol)
      await emergencyAgentHandlers.unpause(selection)
      break
  }
}
