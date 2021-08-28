import ethers from 'ethers'
import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { LendingPoolConfigurator } from '../../ProtocolAddresses.mjs'
import dao from '../../dao.mjs'

// 1. encode the lending pool call data, the lending pool will be called by the agent
// 2. encode the agent data, the agent will be called by the voting app
// 3. voting app will be called by an EOA, so no encoding is needed here,
//    just pass the evm script of nested calls
const unpauseProtocol = async () => {
  const signer = frame()

  // 1. create lending pool call script
  const lendingPoolCallScript = encodeCallScript([
    {
      to: LendingPoolConfigurator,
      calldata: await encodeActCall('setFrozen(bool)', [false]),
    },
  ])

  // 2. encode agent script
  const agentCallScript = encodeCallScript([
    {
      to: dao.tao_agent,
      calldata: await encodeActCall('forward(bytes)', [lendingPoolCallScript]),
    },
  ])

  // 3. create the voting contract we want to interact with
  const votingApp = new ethers.Contract(
    dao.tao_voting,
    ['function newVote(bytes,bytes) external'],
    signer
  )

  // 4. create transaction and log callscript. after the vote passes,
  //    we need this call script to execute the vote
  console.log(agentCallScript)
  await votingApp.newVote(agentCallScript, '0x')
}

export default unpauseProtocol

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
