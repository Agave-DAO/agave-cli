import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import {
    emergency_admin_agent,
    emergency_admin_voting,
} from '../../config/addresses.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'
/**
 * Interact with an external contract with the Gardens agent. This creates a Disputable Vote
 * @param {Array} args - the arguments to pass to the external contract
 * @param {String} voteDescription - the context to pass to the disputable voting app
 */
const pauseProtocol = async (args, voteDescription = '0x') => {
    const signer = frame()

    const agaveCallScript = encodeCallScript([
        {
            to: emergency_admin_agent,
            calldata: await encodeActCall('setPoolPause(bool)', args),
        },
    ])

    // 2. encode agent script
    const agentCallScript = encodeCallScript([
        {
            to: emergency_admin_voting,
            calldata: await encodeActCall('forward(bytes)', [agaveCallScript]),
        },
    ])

    // 3. create the voting contract we want to interact with
    const votingApp = TaoVoting(signer)

    // 4. create transaction and  return the tx
    const tx = await votingApp.newVote(agentCallScript, voteDescription)
    return tx
}

export default pauseProtocol
