import ethers from 'ethers'
import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import {
  LendingPoolConfigurator,
  tao_agent,
  tao_voting,
} from '../../config/addresses.mjs'

// TODO: CHANGE TO EMERGENCY AGENT
// 1. encode the lending pool call data, the lending pool will be called by the agent
// 2. encode the agent data, the agent will be called by the voting app
// 3. voting app will be called by an EOA, so no encoding is needed here,
//    just pass the evm script of nested calls
const pauseProtocol = async (isPaused) => {
  const signer = frame()

  // 1. create lending pool call script
  const lendingPoolCallScript = encodeCallScript([
    {
      to: LendingPoolConfigurator,
      calldata: await encodeActCall('setFrozen(bool)', [isPaused]),
    },
  ])

  // 2. encode agent script
  const agentCallScript = encodeCallScript([
    {
      to: tao_agent,
      calldata: await encodeActCall('forward(bytes)', [lendingPoolCallScript]),
    },
  ])

  // 3. create the voting contract we want to interact with
  const votingApp = new ethers.Contract(
    tao_voting,
    ['function newVote(bytes,bytes) external'],
    signer
  )

  // 4. create transaction and log callscript. after the vote passes,
  //    we need this call script to execute the vote
  console.log(agentCallScript)
  await votingApp.newVote(agentCallScript, '0x')
}

export default pauseProtocol
