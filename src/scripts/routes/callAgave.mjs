import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { tao_agent } from '../../config/addresses.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'
/**
 * Interact with an external contract with the Gardens agent. This creates a Disputable Vote
 * @param {String} to - the address of the external contract
 * @param {String} signature - the signature of the external function
 * @param {Array} args - the arguments to pass to the external contract
 * @param {String} voteDescription - the context to pass to the disputable voting app
 */
const callAgave = async (to, signature, args, voteDescription = '0x') => {
    const signer = frame()

    const agaveCallScript = encodeCallScript([
        {
            to: to,
            calldata: await encodeActCall(signature, args),
        },
    ])

    // 2. encode agent script
    const agentCallScript = encodeCallScript([
        {
            to: tao_agent,
            calldata: await encodeActCall('forward(bytes)', [agaveCallScript]),
        },
    ])

    // 3. create the voting contract we want to interact with
    const votingApp = TaoVoting(signer)

    // 4. create transaction and  return the tx
    const tx = await votingApp.newVote(agentCallScript, voteDescription)
    return tx
}

export default callAgave
