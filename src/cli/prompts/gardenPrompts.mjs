const addToken = [
    {
        type: 'input',
        name: 'addToken',
        message: 'Enter token Address: ',
    },
    {
        type: 'confirm',
        name: 'createPermission',
        message: 'do you also want to create the ADD_POWER_SOURCE_ROLE?'
    }
]

const executeVote = [
    { 
        type: 'number',
        name: 'voteId',
        message: 'Enter voteID...'
    },
    { 
        type: 'input', 
        name: 'calldata',
        message: 'Input the vote calldata...'
    }
]

export default {
    addToken,
    executeVote,
}