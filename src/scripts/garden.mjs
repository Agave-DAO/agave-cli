import callApp from './routes/callApp.mjs'
import createPermission from './routes/createPermission.mjs'
import callExecuteVote from './routes/callExecuteVote.mjs'

import { tao_voting, aggregator, tao_agent } from '../config/addresses.mjs'

export const enableAggregator = async () => {
    await createPermission([
        {
            grantee: tao_voting,
            grantor: aggregator,
            role: 'ADD_POWER_SOURCE_ROLE',
            manager: tao_voting,
        },
        {
            grantee: tao_voting,
            grantor: aggregator,
            role: 'MANAGE_POWER_SOURCE_ROLE',
            manager: tao_voting,
        },
        {
            grantee: tao_voting,
            grantor: aggregator,
            role: 'MANAGE_WEIGHTS_ROLE',
            manager: tao_voting,
        },
    ])
}

export const enableTaoAgentTransfers = async () => {
    await createPermission([
        {
            grantee: tao_voting,
            grantor: tao_agent,
            role: 'TRANSFER_ROLE',
            manager: tao_voting,
        },
    ])
}

export const addTokenToAggregator = async (args) => {
    console.log(args)
    await callApp(aggregator, 'addPowerSource(address,uint8,uint256)', args)
}

export const executeVote = async (id) => await callExecuteVote(id)

export const disablePowerSource = async (args) => {
    console.log([args])
    await callApp(aggregator, 'disableSource(address)', [args])
}

export const enablePowerSource = async (args) => {
    console.log([args])
    await callApp(aggregator, 'enableSource(address)', [args])
}

export const changeSourceWeight = async (args) => {
    console.log(args)
    await callApp(aggregator, 'changeSourceWeight(address,uint256)', args)
}
export const transferTaoAgentTokens = async (args) => {
    console.log(args)
    await callApp(tao_agent, 'transfer(address,address,uint256)', args)
}
