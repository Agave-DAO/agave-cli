import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { LendingPoolConfigurator } from '../../ProtocolAddresses.mjs'
import { tao_agent } from '../../dao.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'

const signature = 'setReserveInterestRateStrategyAddress(address,address)'
const voteDescripton = '0x'

const setReserveInterestRateStrategyAddress = async (args) => {
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
  const votingApp = TaoVoting(signer)

  // 4. create transaction and log callscript. after the vote passes,
  //    we need this call script to execute the vote
  console.log(agentCallScript)
  await votingApp.newVote(agentCallScript, voteDescripton)
}

export default setReserveInterestRateStrategyAddress
