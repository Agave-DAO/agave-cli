import prompts from './cli/prompts/index.mjs'
import inquirer from 'inquirer'
import Agave from './Agave.mjs'

const gardenHandlers = {
  addToken: async (params) => {
    if (params.createPermission) {
      await Agave.garden.addTokenAndPermission(params.token)
    } else {
      await Agave.garden.addToken(params.token)
    }
  },
}

const gardenMenu = async () => {
  const result = await inquirer.prompt(prompts.menu.garden)
  let selection
  switch (result.garden) {
    case 'addToken':
      selection = await inquirer.prompt(prompts.garden.addToken)
      // TODO:
      await gardenHandlers.addToken(selection)
      break
    case 'executeVote':
      selection = await inquirer.prompt(prompts.garden.executeVote)
      // TODO:
      console.log('handeling..', selection)
      break
  }
}

const emergencyAgentMenu = async () => {
  const result = await inquirer.prompt(prompts.menu.emergencyAgent)
  let selection
  switch (result.emergencyAgent) {
    case 'pauseProtocol':
      selection = await inquirer.prompt(prompts.emergencyAgent.pauseProtocol)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'unpauseProtocol':
      selection = await inquirer.prompt(prompts.emergencyAgent.unpauseProtocol)
      // TODO:
      console.log('handeling..', selection)
      break
  }
}

const lendingPoolMenu = async () => {
  const result = await inquirer.prompt(prompts.menu.lendingPool)
  let selection
  switch (result.lendingPool) {
    case 'activateReserve':
      selection = await inquirer.prompt(prompts.lendingPool.activateReserve)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'batchInitReserve':
      selection = await inquirer.prompt(prompts.lendingPool.batchInitReserve)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'configureReserveAsCollateral':
      selection = await inquirer.prompt(
        prompts.lendingPool.configureReserveAsCollateral
      )
      // TODO:
      console.log('handeling..', selection)
      break
    case 'deactivateReserve':
      selection = await inquirer.prompt(prompts.lendingPool.deactivateReserve)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'disableBorrowingOnReserve':
      selection = await inquirer.prompt(
        prompts.lendingPool.disableBorrowingOnReserve
      )
      // TODO:
      console.log('handeling..', selection)
      break
    case 'disableReserveStableRate':
      selection = await inquirer.prompt(
        prompts.lendingPool.disableReserveStableRate
      )
      // TODO:
      console.log('handeling..', selection)
      break
    case 'enableBorrowingOnReserve':
      selection = await inquirer.prompt(
        prompts.lendingPool.enableBorrowingOnReserve
      )
      // TODO:
      console.log('handeling..', selection)
      break
    case 'enableReserveStableRate':
      selection = await inquirer.prompt(
        prompts.lendingPool.enableReserveStableRate
      )
      // TODO:
      console.log('handeling..', selection)
      break
    case 'freezeReserve':
      selection = await inquirer.prompt(prompts.lendingPool.freezeReserve)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'setReserveFactor':
      selection = await inquirer.prompt(prompts.lendingPool.setReserveFactor)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'setReserveInterestRateStrategyAddress':
      selection = await inquirer.prompt(
        prompts.lendingPool.setReserveInterestRateStrategyAddress
      )
      // TODO:
      console.log('handeling..', selection)
      break
    case 'unfreezeReserve':
      selection = await inquirer.prompt(prompts.lendingPool.unfreezeReserve)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'updateAtoken':
      selection = await inquirer.prompt(prompts.lendingPool.updateAtoken)
      // TODO:
      console.log('handeling..', selection)
      break
    case 'updateVariableDebtToken':
      selection = await inquirer.prompt(
        prompts.lendingPool.updateVariableDebtToken
      )
      // TODO:
      console.log('handeling..', selection)
      break
    case 'updateStableDebtToken':
      selection = await inquirer.prompt(
        prompts.lendingPool.updateStableDebtToken
      )
      // TODO:
      console.log('handeling..', selection)
      break
  }
}

const main = async () => {
  const result = await inquirer.prompt(prompts.menu.main)
  switch (result.main) {
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
  console.log('done!')
}
main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })

