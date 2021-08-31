import validate from '../handlers/validate.mjs'

const taoTransfer = [
    {
        type: 'input',
        name: 'token',
        message: 'Enter token Address: ',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'input',
        name: 'to',
        message: 'Enter destination Address: ',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'input',
        name: 'amount',
        message: 'Enter amount in wei: ',
    },
]

const addToken = [
    {
        type: 'input',
        name: 'token',
        message: 'Enter token Address: ',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'confirm',
        name: 'createPermission',
        message: 'do you also want to create the ADD_POWER_SOURCE_ROLE?',
    },
]

const executeVote = [
    {
        type: 'number',
        name: 'voteId',
        message: 'Enter voteID...',
    },
    {
        type: 'input',
        name: 'calldata',
        message: 'Input the vote calldata...',
    },
]

export default {
    taoTransfer,
    addToken,
    executeVote,
}
