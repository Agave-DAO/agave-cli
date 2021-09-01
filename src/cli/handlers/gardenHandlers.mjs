import scripts from '../../scripts/index.mjs'

const gardenHandlers = {
    addToken: async (params) => {
        if (params.createPermission) {
            await scripts.garden.addTokenAndPermission(params.token)
        } else {
            await scripts.garden.addToken(params.token)
        }
    },
    executeVote: async (params) => {
        await scripts.garden.executeVote(params.voteId)
    },
    taoTransfer: async (params) => {
        await scripts.garden.taoTransfer(params.token, params.to, params.amount)
    },
}
export default gardenHandlers
