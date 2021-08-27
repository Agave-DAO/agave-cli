import { ethers } from 'ethers'
import frame from '../../lib/getFrame.mjs'
import dao from '../../dao.mjs'

const [calldata, id] = process.argv.slice(2)

const run = async () => {
  const signer = frame()

  const votingApp = new ethers.Contract(
    dao.tao_voting,
    ['function executeVote(uint256,bytes) external'],
    signer
  )
  await votingApp.executeVote(id, calldata)
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
