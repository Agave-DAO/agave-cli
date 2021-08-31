import { keccak256, encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'
import { acl, tao_voting, tao_agent } from '../../config/addresses.mjs'

const taoTransferPermission = async () => {
    const signer = frame()

    const callscript = encodeCallScript([
        {
            to: acl,
            calldata: await encodeActCall(
                'createPermission(address,address,bytes32,address)',
                [tao_voting, tao_agent, keccak256('TRANSFER_ROLE'), tao_voting]
            ),
        },
    ])

    const votingApp = TaoVoting(signer)

    await votingApp.newVote(callscript, '0x')
    console.log(callscript)
}

export default taoTransferPermission
