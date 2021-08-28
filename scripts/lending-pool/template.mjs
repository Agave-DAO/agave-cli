import ethers from 'ethers'
import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { LendingPoolConfigurator } from '../../ProtocolAddresses.mjs'
import { tao_agent, tao_voting } from '../../dao.mjs'

const signature = ''
const args = process.argv.slice(2)
const voteDescripton = '0x'

const f = async () => {
  const signer = frame()

  const lendingPoolCallScript = encodeCallScript([
    {
      to: LendingPoolConfigurator,
      calldata: await encodeActCall(signature, args),
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
  await votingApp.newVote(agentCallScript, voteDescripton)
}

export default f
