import scripts from '../../scripts/index.mjs'

const protocolHandlers = {
    batchInitReserve: async () => {
        // TODO:
    },

    updateAToken: async () => {
        // TODO:
    },

    updateStableDebtToken: async () => {
        // TODO:
    },

    updateVariableDebtToken: async () => {
        // TODO:
    },

    enableBorrowingOnReserve: async (params) => {
        const args = [params.asset, params.stableBorrowRateEnabled]
        console.log(args)
        await scripts.protocol.enableBorrowingOnReserve(args)
    },

    disableBorrowingOnReserve: async (params) => {
        const args = [params.asset]
        await scripts.protocol.disableBorrowingOnReserve(args)
    },

    configureReserveAsCollateral: async (params) => {
        const args = [
            params.asset,
            params.ltv,
            params.liquidationThreshold,
            params.liquidationBonus,
        ]
        await scripts.protocol.configureReserveAsCollateral(args)
    },

    enableReserveStableRate: async (params) => {
        const args = [params.asset]
        await scripts.protocol.enableReserveStableRate(args)
    },

    disableReserveStableRate: async (params) => {
        const args = [params.asset]
        await scripts.protocol.disableReserveStableRate(args)
    },

    activateReserve: async (params) => {
        const args = [params.asset]
        await scripts.protocol.activateReserve(args)
    },

    deactivateReserve: async (params) => {
        const args = [params.asset]
        await scripts.protocol.deactivateReserve(args)
    },

    freezeReserve: async (params) => {
        const args = [params.asset]
        await scripts.protocol.freezeReserve(args)
    },

    unfreezeReserve: async (params) => {
        const args = [params.asset]
        await scripts.protocol.unfreezeReserve(args)
    },

    setReserveFactor: async (params) => {
        const args = [params.asset, params.reserveFactor]
        await scripts.protocol.setReserveFactor(args)
    },

    setReserveInterestRateStrategyAddress: async (params) => {
        const args = [params.asset, params.rateStrategyAddress]
        await scripts.protocol.setReserveInterestRateStrategyAddress(args)
    },

    setMarketId: async (params) => {
        const args = [params.id]
        await scripts.protocol.setMarketId(args)
    },

    setAddressAsProxy: async (params) => {
        const args = [params.id, params.implementationAddress]
        await scripts.protocol.setAddressAsProxy(args)
    },

    setLendingPoolImpl: async (params) => {
        const args = [params.asset]
        await scripts.protocol.setLendingPoolImpl(args)
    },

    setLendingPoolConfiguratorImpl: async (params) => {
        const args = [params.configurator]
        await scripts.protocol.setLendingPoolConfiguratorImpl(args)
    },

    setLendingPoolCollateralManager: async (params) => {
        const args = [params.manager]
        await scripts.protocol.setLendingPoolCollateralManager(args)
    },

    setPoolAdmin: async (params) => {
        const args = [params.admin]
        await scripts.protocol.setPoolAdmin(args)
    },

    setEmergencyAdmin: async (params) => {
        const args = [params.emergencyAdmin]
        await scripts.protocol.setEmergencyAdmin(args)
    },

    setPriceOracle: async (params) => {
        const args = [params.priceOracle]
        await scripts.protocol.setPriceOracle(args)
    },

    setLendingRateOracle: async (params) => {
        const args = [params.lendingRateOracle]
        await scripts.protocol.setLendingRateOracle(args)
    },

    registerAddressesProvider: async (params) => {
        const args = [params.addressProvider, params.id]
        await scripts.protocol.registerAddressesProvider(args)
    },

    unregisterAddressesProvider: async (params) => {
        const args = [params.addressProvider]
        await scripts.protocol.unregisterAddressesProvider(args)
    },
}

export default protocolHandlers
