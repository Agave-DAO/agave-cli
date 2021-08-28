import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { aggregator } from '../../dao.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'

const addToken = async (token) => {
  const signer = frame()

  const callscript = encodeCallScript([
    {
      to: aggregator,
      calldata: await encodeActCall('addPowerSource(address,uint8,uint256)', [
        token,
        1, // ERC20WithCheckpointing
        1,
      ]),
    },
  ])

  const votingApp = TaoVoting(signer)

  console.log(callscript)
  await votingApp.newVote(callscript, '0x')
}

export default addToken
