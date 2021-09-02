import {
    LendingPoolAddressesProvider,
    LendingPoolAddressesProviderRegistry,
    LendingPoolConfigurator,
} from '../config/addresses.mjs'
import governAgave from './routes/callAgave.mjs'
import pauseAgave from './routes/callMultisig.mjs'

export const pauseProtocol = async (args) => pauseAgave(args)

export const activateReserve = async (args) => {
    console.log(args)
    await governAgave(LendingPoolConfigurator, 'activateReserve(address)', args)
}
export const batchInitReserve = async (args) => {
    await governAgave(LendingPoolConfigurator, 'TODO:', args)
}

export const configureReserveAsCollateral = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'configureReserveAsCollateral(address asset,uint256,uint256,uint256)',
        args
    )
}

export const deactivateReserve = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'deactivateReserve(address)',
        args
    )
}

export const disableBorrowingOnReserve = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'disableBorrowingOnReserve(address)',
        args
    )
}

export const disableReserveStableRate = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'disableReserveStableRate(address)',
        args
    )
}

export const enableBorrowingOnReserve = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'enableBorrowingOnReserve(address,bool)',
        args
    )
}

export const enableReserveStableRate = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'enableReserveStableRate(address)',
        args
    )
}

export const freezeReserve = async (args) => {
    await governAgave(LendingPoolConfigurator, 'freezeReserve(address)', args)
}

export const setReserveFactor = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'setReserveFactor(address,uint256)',
        args
    )
}

export const setReserveInterestRateStrategyAddress = async (args) => {
    await governAgave(
        LendingPoolConfigurator,
        'setReserveInterestRateStrategyAddress(address,address)',
        args
    )
}

export const unfreezeReserve = async (args) => {
    await governAgave(LendingPoolConfigurator, 'unfreezeReserve(address)', args)
}

// TODO:
export const updateAtoken = async (args) => {
    await governAgave(LendingPoolConfigurator, '...', args)
}

// TODO:
export const updateVariableDebtToken = async (args) => {
    await governAgave(LendingPoolConfigurator, '...', args)
}

// TODO:
export const updateStableDebtToken = async (args) => {
    await governAgave(LendingPoolConfigurator, '...', args)
}

export const setMarketId = async (args) => {
    await governAgave(LendingPoolAddressesProvider, 'setMarketId(string)', args)
}

export const setAddressAsProxy = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setAddressAsProxy(bytes32,address)',
        args
    )
}

export const setLendingPoolImpl = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setLendingPoolImpl(address)',
        args
    )
}

export const setLendingPoolConfiguratorImpl = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setLendingPoolConfiguratorImpl(address)',
        args
    )
}

export const setLendingPoolCollateralManager = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setLendingPoolCollateralManager(address)',
        args
    )
}

export const setPoolAdmin = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setPoolAdmin(address)',
        args
    )
}

export const setEmergencyAdmin = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setEmergencyAdmin(address)',
        args
    )
}

export const setPriceOracle = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setPriceOracle(address)',
        args
    )
}

export const setLendingRateOracle = async (args) => {
    await governAgave(
        LendingPoolAddressesProvider,
        'setLendingRateOracle(address)',
        args
    )
}

export const registerAddressesProvider = async (args) => {
    await governAgave(
        LendingPoolAddressesProviderRegistry,
        'registerAddressesProvider(address,uint256)',
        args
    )
}

export const unregisterAddressesProvider = async (args) => {
    await governAgave(
        LendingPoolAddressesProviderRegistry,
        'unregisterAddressesProvider(address)',
        args
    )
}
