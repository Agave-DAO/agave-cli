import frame from '../../lib/getFrame.mjs'
import filterEvents from '../../lib/filterEvents.mjs'
import { TaoVoting } from '../../lib/daoApps.mjs'

const executeVote = async (id) => {
    const signer = frame()
    const votingApp = TaoVoting(signer)

    const votes = await filterEvents(votingApp, 'StartVote')

    const found = await votes.filter((vote) => {
        const {
            args: { voteId },
        } = vote
        return voteId.toString() === id.toString()
    })

    if (found.length == 0) {
        console.log('VoteID not found')
        return
    }

    const {
        args: { voteId, executionScript },
    } = found.pop()

    const canExecute = await votingApp.canExecute(voteId)

    if (!canExecute) {
        console.log(`Cant execute vote`)
        return
    }

    await votingApp.executeVote(voteId, executionScript)
}

export default executeVote
