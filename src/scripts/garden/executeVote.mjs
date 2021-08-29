import frame from '../../lib/getFrame.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'

const executeVote = async (calldata, id) => {
  const signer = frame()
  const votingApp = TaoVoting(signer)
  await votingApp.executeVote(id, calldata)
}

export default executeVote
