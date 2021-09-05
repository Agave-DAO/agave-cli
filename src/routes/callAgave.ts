import { ethers } from 'ethers'
import { encodeActCall, encodeCallScript } from '../helpers/useEVM'
import frame from '../helpers/useFrame'
import { tao_agent, tao_voting } from '../config'

const callAgave = async (
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
      to: tao_agent,
      calldata: await encodeActCall('forward(bytes)', [agaveCallScript]),
    },
  ])

  // 3. create the voting contract we want to interact with

  const votingApp = new ethers.Contract(
    tao_voting,
    ['newVote(bytes,bytes) external returns(uint256)'],
    signer
  )

  // 4. create transaction and  return the tx
  const tx = await votingApp.newVote(agentCallScript, voteDescription)
  return tx
}

export default callAgave
