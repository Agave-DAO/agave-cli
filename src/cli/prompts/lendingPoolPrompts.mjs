import { setLendingPoolImpl } from '../../scripts/protocol.mjs'
import validate from '../handlers/validate.mjs'

// TODO: CUSTOM SOLIDITY DATA TYPES
const batchInitReserve = []
const updateAToken = []
const updateStableDebtToken = []
const updateVariableDebtToken = []

const enableBorrowingOnReserve = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'confirm',
        name: 'stableBorrowRateEnabled',
        message:
            'stableBorrowRateEnabled: True if stable borrow rate needs to be enabled by default on this reserve',
    },
]

const disableBorrowingOnReserve = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
]

const configureReserveAsCollateral = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
    },
    {
        type: 'number',
        name: 'ltv',
        message: 'ltv: The loan to value of the asset when used as collateral',
    },
    {
        type: 'number',
        name: 'liquidationThreshold',
        message:
            'liquidationThreshold: The threshold at which loans using this asset as collateral will be considered undercollateralized',
    },
    {
        type: 'number',
        name: 'liquidationBonus',
        message:
            'liquidationBonus: The bonus liquidators receive to liquidate this asset. The values is always above 100%. A value of 105% means the liquidator will receive a 5% bonus',
    },
]

const enableReserveStableRate = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
]

const disableReserveStableRate = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
]

const activateReserve = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
]

const deactivateReserve = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
]

const freezeReserve = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
]

const unfreezeReserve = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
]

const setReserveFactor = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'number',
        name: 'reserveFactor',
        message: 'reserveFactor: The new reserve factor of the reserve',
    },
]

const setReserveInterestRateStrategyAddress = [
    {
        type: 'input',
        name: 'asset',
        message: 'asset: The address of the underlying asset of the reserve',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'input',
        name: 'rateStrategyAddress',
        message:
            'rateStrategyAddress The new address of the interest strategy contract',
        validate: (answer) => validate.address(answer),
    },
]

const setMarketId = [
    {
        type: 'input',
        name: 'id',
        message: 'marketId: The market Id',
    },
]

const setAddressAsProxy = [
    {
        type: 'input',
        name: 'id',
        message: 'id: the id',
    },
    {
        type: 'input',
        name: 'implementationAddress',
        message: 'implementationAddress: The address of the new implementation',
        validate: (answer) => validate.address(answer),
    },
]

const setLendingPoolImpl = [
    {
        type: 'input',
        name: 'pool',
        message: 'pool: The new LendingPool implementation',
        validate: (answer) => validate.address(answer),
    },
]

const setLendingPoolConfiguratorImpl = [
    {
        type: 'input',
        name: 'configurator',
        message:
            ' configurator: The new LendingPoolConfigurator implementation',
        validate: (answer) => validate.address(answer),
    },
]

const setLendingPoolCollateralManager = [
    {
        type: 'input',
        name: 'manager',
        message: 'manager: The new LendingPoolCollateralManager address',
        validate: (answer) => validate.address(answer),
    },
]

const setPoolAdmin = [
    {
        type: 'input',
        name: 'admin',
        message: 'admin: The new admin address',
        validate: (answer) => validate.address(answer),
    },
]

const setEmergencyAdmin = [
    {
        type: 'input',
        name: 'emergencyAdmin',
        message: 'emergencyAdmin: The new emergency admin address',
        validate: (answer) => validate.address(answer),
    },
]

const setPriceOracle = [
    {
        type: 'input',
        name: 'priceOracle',
        message: 'PriceOracle: The new price oracle address',
        validate: (answer) => validate.address(answer),
    },
]

const setLendingRateOracle = [
    {
        type: 'input',
        name: 'lendingRateOracle',
        message: 'lendingRateOracle: The new LendingRateOracle address',
        validate: (answer) => validate.address(answer),
    },
]

const registerAddressesProvider = [
    {
        type: 'input',
        name: 'addressProvider',
        message: 'addressProvider: The new AddressProvider address',
        validate: (answer) => validate.address(answer),
    },
    {
        type: 'number',
        name: 'id',
        message: 'id: the id',
    },
]

const unregisterAddressesProvider = [
    {
        type: 'input',
        name: 'addressProvider',
        message: 'addressProvider: The AddressProvider address',
        validate: (answer) => validate.address(answer),
    },
]

export default {
    batchInitReserve,
    updateAToken,
    updateStableDebtToken,
    updateVariableDebtToken,
    enableBorrowingOnReserve,
    disableBorrowingOnReserve,
    configureReserveAsCollateral,
    enableReserveStableRate,
    disableReserveStableRate,
    activateReserve,
    deactivateReserve,
    freezeReserve,
    unfreezeReserve,
    setReserveFactor,
    setReserveInterestRateStrategyAddress,
    setMarketId,
    setAddressAsProxy,
    setLendingPoolImpl,
    setLendingPoolConfiguratorImpl,
    setLendingPoolCollateralManager,
    setPoolAdmin,
    setEmergencyAdmin,
    setPriceOracle,
    setLendingRateOracle,
    registerAddressesProvider,
    unregisterAddressesProvider,
}
