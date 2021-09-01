const main = {
    type: 'list',
    name: 'main',
    message: 'Main Menu',
    choices: [
        {
            name: '🌼 Gardens',
            value: 'garden',
        },
        {
            name: '🏦 Protocol',
            value: 'lendingPool',
        },
        {
            name: '🆘 Emergency Multisig',
            value: 'emergencyAgent',
        },
    ],
}

const garden = {
    type: 'list',
    name: 'garden',
    message: 'Garden Menu',
    choices: [
        {
            name: 'Add Token',
            value: 'addToken',
        },
        {
            name: 'Transfer Tokens (tao voting)',
            value: 'taoTransfer',
        },
        {
            name: 'Execute Vote',
            value: 'executeVote',
        },
    ],
}

const emergencyAgent = {
    type: 'list',
    name: 'emergencyAgent',
    message: 'Emergency Multisig Menu',
    choices: [
        {
            name: 'Pause Protocol',
            value: 'pauseProtocol',
        },
        {
            name: 'Unpause Protocol',
            value: 'unpauseProtocol',
        },
    ],
}

const lendingPool = {
    type: 'list',
    name: 'lendingPool',
    message: 'Lending Pool Menu',
    choices: [
        {
            name: 'Activate Reserve',
            value: 'activateReserve',
        },
        {
            name: 'Batch Init Reserve',
            value: 'batchInitReserve',
        },
        {
            name: 'Configure Reserve As Collateral',
            value: 'configureReserveAsCollateral',
        },
        {
            name: 'Deactivate Reserve',
            value: 'deactivateReserve',
        },
        {
            name: 'Disable Borrowing On Reserve',
            value: 'disableBorrowingOnReserve',
        },
        {
            name: 'Disable Reserve Stable Rate',
            value: 'disableReserveStableRate',
        },
        {
            name: 'Enable Borrowing On Reserve',
            value: 'enableBorrowingOnReserve',
        },
        {
            name: 'Enable Reserve Stable Rate',
            value: 'enableReserveStableRate',
        },
        {
            name: 'Freeze Reserve',
            value: 'freezeReserve',
        },
        {
            name: 'Set Reserve Factor',
            value: 'setReserveFactor',
        },
        {
            name: 'Set Reserve Interest Rate Strategy Address',
            value: 'setReserveInterestRateStrategyAddress',
        },
        {
            name: 'Unfreeze Reserve',
            value: 'unfreezeReserve',
        },
        {
            name: 'Update aToken',
            value: 'updateAtoken',
        },
        {
            name: 'Update Variable Debt Token',
            value: 'updateVariableDebtToken',
        },
        {
            name: 'Update Stable Debt Token',
            value: 'updateStableDebtToken',
        },
    ],
}

export default {
    main,
    garden,
    lendingPool,
    emergencyAgent,
}
