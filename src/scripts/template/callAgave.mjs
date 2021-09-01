import { encodeActCall, encodeCallScript } from '../../lib/evm.mjs'
import frame from '../../lib/getFrame.mjs'
import { tao_agent } from '../../dao.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'
/**
 * Interact with an external contract with the Gardens agent. This creates a Disputable Vote
 * @param {String} to - the address of the external contract
 * @param {String} signature - the signature of the external function
 * @param {Array} args - the arguments to pass to the external contract
 * @param {String} voteDescription - the context to pass to the disputable voting app
 */
const callExternalContract = async (
    to,
    signature,
    args,
    voteDescription = '0x'
) => {
    const signer = frame()

    const externalCallScript = encodeCallScript([
        {
            to: to,
            calldata: await encodeActCall(signature, args),
        },
    ])

    // 2. encode agent script
    const agentCallScript = encodeCallScript([
        {
            to: tao_agent,
            calldata: await encodeActCall('forward(bytes)', [
                externalCallScript,
            ]),
        },
    ])

    // 3. create the voting contract we want to interact with
    const votingApp = TaoVoting(signer)

    // 4. create transaction and log callscript. after the vote passes,
    //    we need this call script to execute the vote
    console.log(agentCallScript)
    await votingApp.newVote(agentCallScript, voteDescripton)
}

export default callExternalContract
