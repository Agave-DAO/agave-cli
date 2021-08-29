import Agave from '../../scripts/Agave.mjs'

const lendingPoolHandlers = {
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
        await Agave.lendingPool.enableBorrowingOnReserve(args)
    },

    disableBorrowingOnReserve: async (params) => {
        const args = [params.asset]
        await Agave.lendingPool.disableBorrowingOnReserve(args)
    },

    configureReserveAsCollateral: async (params) => {
        const args = [
            params.asset,
            params.ltv,
            params.liquidationThreshold,
            params.liquidationBonus,
        ]
        await Agave.lendingPool.configureReserveAsCollateral(args)
    },

    enableReserveStableRate: async (params) => {
        const args = [params.asset]
        await Agave.lendingPool.enableReserveStableRate(args)
    },

    disableReserveStableRate: async (params) => {
        const args = [params.asset]
        await Agave.lendingPool.disableReserveStableRate(args)
    },

    activateReserve: async (params) => {
        const args = [params.asset]
        await Agave.lendingPool.activateReserve(args)
    },

    deactivateReserve: async (params) => {
        const args = [params.asset]
        await Agave.lendingPool.deactivateReserve(args)
    },

    freezeReserve: async (params) => {
        const args = [params.asset]
        await Agave.lendingPool.freezeReserve(args)
    },

    unfreezeReserve: async (params) => {
        const args = [params.asset]
        await Agave.lendingPool.unfreezeReserve(args)
    },

    setReserveFactor: async (params) => {
        const args = [params.asset, params.reserveFactor]
        await Agave.lendingPool.setReserveFactor(args)
    },

    setReserveInterestRateStrategyAddress: async (params) => {
        const args = [params.asset, params.rateStrategyAddress]
        await Agave.lendingPool.setReserveInterestRateStrategyAddress(args)
    },
}

export default lendingPoolHandlers
