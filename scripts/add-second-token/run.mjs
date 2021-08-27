import ethers from 'ethers'
import { keccak256, encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { token } from './config.mjs'
import dao from '../../dao.mjs'

const run = async () => {
  const signer = frame()

  // 3. create call script
  const callscript = encodeCallScript([
    {
      to: dao.acl,
      calldata: await encodeActCall(
        'createPermission(address,address,bytes32,address)',
        [
          dao.tao_voting,
          dao.aggregator,
          keccak256('ADD_POWER_SOURCE_ROLE'),
          dao.tao_voting,
        ]
      ),
    },
    {
      to: dao.aggregator,
      calldata: await encodeActCall('addPowerSource(address,uint8,uint256)', [
        token,
        1, // ERC20WithCheckpointing
        1,
      ]),
    },
  ])

  // 4. create the voting contract we want to interact with
  const votingApp = new ethers.Contract(
    dao.tao_voting,
    ['function newVote(bytes,bytes) external'],
    signer
  )

  // 5. create transaction and log callscript
  await votingApp.newVote(callscript, '0x')
  console.log(callscript)
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
