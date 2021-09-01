import agave from '../config/agave.mjs'
import governAgave from './routes/governAgave.mjs'
import pauseAgave from './routes/pauseAgave.mjs'

const poolConfig = agave.LendingPoolConfigurator
const addressProvider = agave.LendingPoolAddressesProvider
const addressRegistery = agave.LendingPoolAddressesProviderRegistry

export default {
    pauseProtocol: async (args) => pauseAgave(args),
    activateReserve: async (args) => {
        governAgave(poolConfig.address, poolConfig.sig.activateReserve, args)
    },
    batchInitReserve: async (args) => {
        governAgave(poolConfig.address, poolConfig.sig.batchInitReserve, args)
    },
    configureReserveAsCollateral: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.configureReserveAsCollateral,
            args
        )
    },
    deactivateReserve: async (args) => {
        governAgave(poolConfig.address, poolConfig.sig.deactivateReserve, args)
    },
    disableBorrowingOnReserve: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.disableBorrowingOnReserve,
            args
        )
    },
    disableReserveStableRate: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.disableReserveStableRate,
            args
        )
    },
    enableBorrowingOnReserve: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.enableBorrowingOnReserve,
            args
        )
    },
    enableReserveStableRate: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.enableReserveStableRate,
            args
        )
    },
    freezeReserve: async (args) => {
        governAgave(poolConfig.address, poolConfig.sig.freezeReserve, args)
    },
    setReserveFactor: async (args) => {
        governAgave(poolConfig.address, poolConfig.sig.setReserveFactor, args)
    },
    setReserveInterestRateStrategyAddress: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.setReserveInterestRateStrategyAddress,
            args
        )
    },
    unfreezeReserve: async (args) => {
        governAgave(poolConfig.address, poolConfig.sig.unfreezeReserve, args)
    },
    updateAtoken: async (args) => {
        governAgave(poolConfig.address, poolConfig.sig.updateAtoken, args)
    },
    updateVariableDebtToken: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.updateVariableDebtToken,
            args
        )
    },
    updateStableDebtToken: async (args) => {
        governAgave(
            poolConfig.address,
            poolConfig.sig.updateStableDebtToken,
            args
        )
    },
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    setMarketId: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setMarketId,
            args
        )
    },
    setAddressAsProxy: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setAddressAsProxy,
            args
        )
    },
    setLendingPoolImpl: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setLendingPoolImpl,
            args
        )
    },
    setLendingPoolConfiguratorImpl: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setLendingPoolConfiguratorImpl,
            args
        )
    },
    setLendingPoolCollateralManager: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setLendingPoolCollateralManager,
            args
        )
    },
    setPoolAdmin: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setPoolAdmin,
            args
        )
    },
    setEmergencyAdmin: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setEmergencyAdmin,
            args
        )
    },
    setPriceOracle: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setPriceOracle,
            args
        )
    },
    setLendingRateOracle: async (args) => {
        governAgave(
            addressProvider.address,
            addressProvider.sig.setLendingRateOracle,
            args
        )
    },
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////
    registerAddressesProvider: async (args) => {
        governAgave(
            addressRegistery.address,
            addressRegistery.sig.registerAddressesProvider,
            args
        )
    },
    unregisterAddressesProvider: async (args) => {
        governAgave(
            addressRegistery.address,
            addressRegistery.sig.unregisterAddressesProvider,
            args
        )
    },
}
