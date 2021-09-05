import { ethers } from 'ethers'
import { encodeActCall, encodeCallScript } from 'dao-evm-helpers'
import frame from '../helpers/useFrame'
import { sabAgent, sabVoting } from '../config'

const callSAB = async (
  to: string,
  signature: string,
  args: Array<any>,
  voteDescription = '0x'
) => {
  const signer = frame()

  const agaveCallScript = encodeCallScript([
    {
      to: to,
      calldata: await encodeActCall(signature, args),
    },
  ])

  // 2. encode agent script
  const agentCallScript = encodeCallScript([
    {
      to: sabAgent,
      calldata: await encodeActCall('forward(bytes)', [agaveCallScript]),
    },
  ])

  // 3. create the voting contract we want to interact with

  const votingApp = new ethers.Contract(
    sabVoting,
    ['function newVote(bytes,bytes) external returns(uint256)'],
    signer
  )

  // 4. create transaction and  return the tx
  const tx = await votingApp.newVote(agentCallScript, voteDescription)
  return tx
}

export default callSAB
