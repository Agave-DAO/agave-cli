import { TaoVoting } from '../lib/daoApps.mjs'
import {
    acl,
    cv_agent,
    emergency_admin_agent,
    aggregator,
    agreement,
    cv_voting,
    tao_voting,
    tao_agent,
    token_manager,
    dao,
    LendingPoolConfigurator,
    LendingPoolAddressesProvider,
    LendingPoolAddressesProviderRegistry,
} from './addresses.mjs'

export default {
    Kernel: {
        address: dao,
    },
    Acl: {
        address: acl,
    },
    TokenManager: {
        address: token_manager,
    },
    CVAgent: {
        address: cv_agent,
    },
    TAOAgent: {
        address: tao_agent,
    },
    EmergencyAgent: {
        address: emergency_admin_agent,
    },
    TAOVoting: {
        address: tao_voting,
        contract: TaoVoting,
    },
    CVoting: {
        address: cv_voting,
    },
    Aggregator: {
        address: aggregator,
    },
    Agreement: {
        address: agreement,
    },
    LendingPoolConfigurator: {
        address: LendingPoolConfigurator,
        sig: {
            setFrozen: 'setFrozen(bool)',
            activateReserve: 'activateReserve(address)',
            configureReserveAsCollateral:
                'configureReserveAsCollateral(address asset,uint256,uint256,uint256)',
            deactivateReserve: 'deactivateReserve(address)',
            disableBorrowingOnReserve: 'disableBorrowingOnReserve(address)',
            enableBorrowingOnReserve: 'enableBorrowingOnReserve(address,bool)',
            enableReserveStableRate: 'enableReserveStableRate(address)',
            freezeReserve: 'freezeReserve(address)',
            setReserveFactor: 'setReserveFactor(address,uint256)',
            setReserveInterestRateStrategyAddress:
                'setReserveInterestRateStrategyAddress(address,address)',
            unfreezeReserve: 'unfreezeReserve(address)',
        },
    },
    LendingPoolAddressesProvider: {
        address: LendingPoolAddressesProvider,
        sig: {
            setMarketId: 'setMarketId(string)',
            setAddressAsProxy: 'setAddressAsProxy(bytes32,address)',
            setLendingPoolImpl: 'setLendingPoolImpl(address)',
            setLendingPoolConfiguratorImpl:
                'setLendingPoolConfiguratorImpl(address)',
            setLendingPoolCollateralManager:
                'setLendingPoolCollateralManager(address)',
            setPoolAdmin: 'setPoolAdmin(address)',
            setEmergencyAdmin: 'setEmergencyAdmin(address)',
            setPriceOracle: 'setPriceOracle(address)',
            setLendingRateOracle: 'setLendingRateOracle(address)',
        },
    },
    LendingPoolAddressesProviderRegistry: {
        address: LendingPoolAddressesProviderRegistry,
        sig: {
            registerAddressesProvider:
                'registerAddressesProvider(address,uint256)',
            unregisterAddressesProvider: 'unregisterAddressesProvider(address)',
        },
    },
}
