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
        type: 'list',
        name: 'type',
        message: 'Type of token to add: ',
        choices: [
            {
                name: 'ERC20 With Checkpointing',
                value: 1,
            },
            {
                name: 'ERC900 ',
                value: 2,
            },
        ],
    },
    {
        type: 'number',
        name: 'weight',
        message: 'Enter token weight: ',
    },
]

const enableAggregator = [
    {
        type: 'confirm',
        name: 'enable',
        message: 'Enable Voting Aggregator permissions',
    },
]

const enableTaoTransfers = [
    {
        type: 'confirm',
        name: 'enable',
        message: 'Enable Tao Agent permissions',
    },
]

const executeVote = [
    {
        type: 'number',
        name: 'voteId',
        message: 'Enter voteID...',
    },
]

const enablePowerSource = [
    {
        type: 'input',
        name: 'token',
        message: 'Enter token Address: ',
        validate: (answer) => validate.address(answer),
    },
]

const disablePowerSource = [
    {
        type: 'input',
        name: 'token',
        message: 'Enter token Address: ',
        validate: (answer) => validate.address(answer),
    },
]

const changeSourceWeight = [
    {
        type: 'input',
        name: 'token',
        message: 'Enter token Address: ',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'number',
        name: 'weight',
        message: 'Enter token weight: ',
    },
]

export default {
    taoTransfer,
    addToken,
    executeVote,
    enableAggregator,
    enableTaoTransfers,
    enablePowerSource,
    disablePowerSource,
    changeSourceWeight,
}
