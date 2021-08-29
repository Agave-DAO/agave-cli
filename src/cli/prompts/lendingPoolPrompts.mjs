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
}
