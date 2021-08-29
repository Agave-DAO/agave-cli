import Agave from '../../scripts/Agave.mjs'

const gardenHandlers = {
  addToken: async (params) => {
    if (params.createPermission) {
      await Agave.garden.addTokenAndPermission(params.token)
    } else {
      await Agave.garden.addToken(params.token)
    }
  },
  executeVote: async (params) => {
    await Agave.garden.executeVote(params.calldata, params.voteId)
  },
}
export default gardenHandlers
