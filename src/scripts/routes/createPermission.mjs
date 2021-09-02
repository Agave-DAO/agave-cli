import { keccak256, encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'
import { acl } from '../../config/addresses.mjs'

const createPermission = async (args) => {
    const signer = frame()

    const calldatum = []

    for (permission in args) {
        calldatum.push({
            to: acl,
            calldata: await encodeActCall(
                'createPermission(address,address,bytes32,address)',
                [
                    permission.grantee,
                    permission.grantor,
                    keccak256(permission.role),
                    permission.manager,
                ]
            ),
        })
    }
    const callscript = encodeCallScript(calldatum)

    const votingApp = TaoVoting(signer)

    const tx = await votingApp.newVote(callscript, '0x')
    return tx
}

export default createPermission
