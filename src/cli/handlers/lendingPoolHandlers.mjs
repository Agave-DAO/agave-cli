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
}

export default protocolHandlers
