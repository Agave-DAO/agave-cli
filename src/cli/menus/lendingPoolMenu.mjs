import prompts from '../prompts/index.mjs'
import inquirer from 'inquirer'

export const lendingPoolMenu = async () => {
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
