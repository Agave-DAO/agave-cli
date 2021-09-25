import Agreement from './Agreement.json'
import ConvictionVoting from './ConvictionVoting.json'
import DisputableVoting from './DisputableVoting.json'
import HookedTokenManager from './HookedTokenManager.json'
import Issuance from './Issuance.json'
import VotingAggregator from './VotingAggregator.json'

export const abis = {
    Agreement,
    ConvictionVoting,
    DisputableVoting,
    HookedTokenManager,
    Issuance,
    VotingAggregator
}

export const appIDs = {
    Agreement: 'agreement-1hive.open',
    ConvictionVoting: 'disputable-conviction-voting',
    DisputableVoting: 'disputable-voting.open',
    HookedTokenManager: 'wrappable-hooked-token-manager',
    Issuance: 'dynamic-issuance',
    VotingAggregator: 'vote-token-aggregator',
}