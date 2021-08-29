import { keccak256, encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'
import { acl, tao_voting, aggregator } from '../../config/addresses.mjs'

const addTokenAndPermission = async (token) => {
  const signer = frame()

  const callscript = encodeCallScript([
    {
      to: acl,
      calldata: await encodeActCall(
        'createPermission(address,address,bytes32,address)',
        [tao_voting, aggregator, keccak256('ADD_POWER_SOURCE_ROLE'), tao_voting]
      ),
    },
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

  await votingApp.newVote(callscript, '0x')
  console.log(callscript)
}

export default addTokenAndPermission
