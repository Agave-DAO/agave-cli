import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'
import { tao_agent } from '../../config/addresses.mjs'

const taoTransfer = async (token, to, value) => {
    const signer = frame()

    const callscript = encodeCallScript([
        {
            to: tao_agent,
            calldata: await encodeActCall('transfer(address,address,uint256)', [
                token,
                to,
                value,
            ]),
        },
    ])

    const votingApp = TaoVoting(signer)

    console.log(callscript)
    await votingApp.newVote(callscript, '0x')
}

export default taoTransfer
