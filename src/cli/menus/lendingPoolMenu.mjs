import prompts from '../prompts/index.mjs'
import inquirer from 'inquirer'
import handlers from '../handlers/lendingPoolHandlers.mjs'

export const lendingPoolMenu = async () => {
    const result = await inquirer.prompt(prompts.menu.lendingPool)
    let selection

    switch (result.lendingPool) {
        case 'activateReserve':
            selection = await inquirer.prompt(
                prompts.lendingPool.activateReserve
            )
            await handlers.activateReserve(selection)
            break

        case 'batchInitReserve':
            selection = await inquirer.prompt(
                prompts.lendingPool.batchInitReserve
            )
            // TODO:
            break

        case 'configureReserveAsCollateral':
            selection = await inquirer.prompt(
                prompts.lendingPool.configureReserveAsCollateral
            )
            await handlers.configureReserveAsCollateral(selection)
            break

        case 'deactivateReserve':
            selection = await inquirer.prompt(
                prompts.lendingPool.deactivateReserve
            )
            await handlers.deactivateReserve(selection)
            break

        case 'disableBorrowingOnReserve':
            selection = await inquirer.prompt(
                prompts.lendingPool.disableBorrowingOnReserve
            )
            await handlers.disableBorrowingOnReserve(selection)
            break

        case 'disableReserveStableRate':
            selection = await inquirer.prompt(
                prompts.lendingPool.disableReserveStableRate
            )
            await handlers.disableReserveStableRate(selection)
            break

        case 'enableBorrowingOnReserve':
            selection = await inquirer.prompt(
                prompts.lendingPool.enableBorrowingOnReserve
            )
            await handlers.enableBorrowingOnReserve(selection)
            break

        case 'enableReserveStableRate':
            selection = await inquirer.prompt(
                prompts.lendingPool.enableReserveStableRate
            )
            await handlers.enableReserveStableRate(selection)
            break

        case 'freezeReserve':
            selection = await inquirer.prompt(prompts.lendingPool.freezeReserve)
            await handlers.freezeReserve(selection)
            break

        case 'setReserveFactor':
            selection = await inquirer.prompt(
                prompts.lendingPool.setReserveFactor
            )
            await handlers.freezeReserve(selection)
            break

        case 'setReserveInterestRateStrategyAddress':
            selection = await inquirer.prompt(
                prompts.lendingPool.setReserveInterestRateStrategyAddress
            )
            await handlers.setReserveInterestRateStrategyAddress(selection)
            break

        case 'unfreezeReserve':
            selection = await inquirer.prompt(
                prompts.lendingPool.unfreezeReserve
            )
            await handlers.unfreezeReserve(selection)
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
