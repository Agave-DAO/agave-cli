import scripts from '../../scripts/index.mjs'

const gardenHandlers = {
    addToken: async (params) => {
        console.log(params)
        await scripts.garden.addTokenToAggregator([
            params.token,
            params.type,
            params.weight,
        ])
    },
    executeVote: async (params) => {
        await scripts.garden.executeVote(params.voteId)
    },
    taoTransfer: async (params) => {
        await scripts.garden.transferTaoAgentTokens([
            params.token,
            params.to,
            params.amount,
        ])
    },
    enableAggregator: async (params) => {
        if (params.enable) {
            await scripts.garden.enableAggregator()
        }
    },
    enableTaoTransfers: async (params) => {
        if (params.enable) {
            await scripts.garden.enableTaoTransfers()
        }
    },
    enablePowerSource: async (params) => {
        await scripts.garden.enablePowerSource(params.token)
    },
    disablePowerSource: async (params) => {
        await scripts.garden.disablePowerSource(params.token)
    },
    changeSourceWeight: async (params) => {
        await scripts.garden.changeSourceWeight([params.token, params.weight])
    },
}
export default gardenHandlers
