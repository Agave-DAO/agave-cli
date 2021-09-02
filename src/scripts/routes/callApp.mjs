import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'

const callApp = async (address, sig, args) => {
    const signer = frame()

    const callscript = encodeCallScript([
        {
            to: address,
            calldata: await encodeActCall(sig, args),
        },
    ])

    const votingApp = TaoVoting(signer)

    const tx = await votingApp.newVote(callscript, '0x')
    return tx
}

export default callApp
