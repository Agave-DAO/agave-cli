// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {ILendingPoolAddressesProvider} from "./ILendingPoolAddressesProvider.sol";
import {Errors} from "./Errors.sol";
import {ILendingPoolConfigurator} from "./ILendingPoolConfigurator.sol";

/**
 * @title LendingPoolConfigurator contract
 * @author Aave
 * @dev Implements the configuration methods for the Aave protocol
 **/

contract LendingPoolConfigurator is ILendingPoolConfigurator {
    ILendingPoolAddressesProvider internal addressesProvider;

    modifier onlyPoolAdmin() {
        require(
            addressesProvider.getPoolAdmin() == msg.sender,
            Errors.CALLER_NOT_POOL_ADMIN
        );
        _;
    }

    modifier onlyEmergencyAdmin() {
        require(
            addressesProvider.getEmergencyAdmin() == msg.sender,
            Errors.LPC_CALLER_NOT_EMERGENCY_ADMIN
        );
        _;
    }

    uint256 internal constant CONFIGURATOR_REVISION = 0x1;

    event MockCalled();

    function getRevision() internal pure returns (uint256) {
        return CONFIGURATOR_REVISION;
    }

    function initialize(ILendingPoolAddressesProvider provider) public {
        addressesProvider = provider;
    }

    /**
     * @dev Initializes reserves in batch
     **/
    function batchInitReserve(InitReserveInput[] calldata input)
        external
        onlyPoolAdmin
    {
        emit MockCalled();
    }

    function _initReserve(address pool, InitReserveInput calldata input)
        internal
    {
        emit ReserveInitialized(
            input.underlyingAsset,
            0x0000000000000000000000000000000000000000,
            0x0000000000000000000000000000000000000000,
            0x0000000000000000000000000000000000000000,
            input.interestRateStrategyAddress
        );
    }

    /**
     * @dev Updates the aToken implementation for the reserve
     **/
    function updateAToken(UpdateATokenInput calldata input)
        external
        onlyPoolAdmin
    {
        emit ATokenUpgraded(
            input.asset,
            0x0000000000000000000000000000000000000000,
            input.implementation
        );
    }

    /**
     * @dev Updates the stable debt token implementation for the reserve
     **/
    function updateStableDebtToken(UpdateDebtTokenInput calldata input)
        external
        onlyPoolAdmin
    {
        emit StableDebtTokenUpgraded(
            input.asset,
            0x0000000000000000000000000000000000000000,
            input.implementation
        );
    }

    /**
     * @dev Updates the variable debt token implementation for the asset
     **/
    function updateVariableDebtToken(UpdateDebtTokenInput calldata input)
        external
        onlyPoolAdmin
    {
        emit VariableDebtTokenUpgraded(
            input.asset,
            0x0000000000000000000000000000000000000000,
            input.implementation
        );
    }

    /**
     * @dev Enables borrowing on a reserve
     * @param asset The address of the underlying asset of the reserve
     * @param stableBorrowRateEnabled True if stable borrow rate needs to be enabled by default on this reserve
     **/
    function enableBorrowingOnReserve(
        address asset,
        bool stableBorrowRateEnabled
    ) external onlyPoolAdmin {
        emit BorrowingEnabledOnReserve(asset, stableBorrowRateEnabled);
    }

    /**
     * @dev Disables borrowing on a reserve
     * @param asset The address of the underlying asset of the reserve
     **/
    function disableBorrowingOnReserve(address asset) external onlyPoolAdmin {
        emit BorrowingDisabledOnReserve(asset);
    }

    /**
     * @dev Configures the reserve collateralization parameters
     * all the values are expressed in percentages with two decimals of precision. A valid value is 10000, which means 100.00%
     * @param asset The address of the underlying asset of the reserve
     * @param ltv The loan to value of the asset when used as collateral
     * @param liquidationThreshold The threshold at which loans using this asset as collateral will be considered undercollateralized
     * @param liquidationBonus The bonus liquidators receive to liquidate this asset. The values is always above 100%. A value of 105%
     * means the liquidator will receive a 5% bonus
     **/
    function configureReserveAsCollateral(
        address asset,
        uint256 ltv,
        uint256 liquidationThreshold,
        uint256 liquidationBonus
    ) external onlyPoolAdmin {
        emit CollateralConfigurationChanged(
            asset,
            ltv,
            liquidationThreshold,
            liquidationBonus
        );
    }

    /**
     * @dev Enable stable rate borrowing on a reserve
     * @param asset The address of the underlying asset of the reserve
     **/
    function enableReserveStableRate(address asset) external onlyPoolAdmin {
        emit StableRateEnabledOnReserve(asset);
    }

    /**
     * @dev Disable stable rate borrowing on a reserve
     * @param asset The address of the underlying asset of the reserve
     **/
    function disableReserveStableRate(address asset) external onlyPoolAdmin {
        emit StableRateDisabledOnReserve(asset);
    }

    /**
     * @dev Activates a reserve
     * @param asset The address of the underlying asset of the reserve
     **/
    function activateReserve(address asset) external onlyPoolAdmin {
        emit ReserveActivated(asset);
    }

    /**
     * @dev Deactivates a reserve
     * @param asset The address of the underlying asset of the reserve
     **/
    function deactivateReserve(address asset) external onlyPoolAdmin {
        emit ReserveDeactivated(asset);
    }

    /**
     * @dev Freezes a reserve. A frozen reserve doesn"t allow any new deposit, borrow or rate swap
     *  but allows repayments, liquidations, rate rebalances and withdrawals
     * @param asset The address of the underlying asset of the reserve
     **/
    function freezeReserve(address asset) external onlyPoolAdmin {
        emit ReserveFrozen(asset);
    }

    /**
     * @dev Unfreezes a reserve
     * @param asset The address of the underlying asset of the reserve
     **/
    function unfreezeReserve(address asset) external onlyPoolAdmin {
        emit ReserveUnfrozen(asset);
    }

    /**
     * @dev Updates the reserve factor of a reserve
     * @param asset The address of the underlying asset of the reserve
     * @param reserveFactor The new reserve factor of the reserve
     **/
    function setReserveFactor(address asset, uint256 reserveFactor)
        external
        onlyPoolAdmin
    {
        emit ReserveFactorChanged(asset, reserveFactor);
    }

    /**
     * @dev Sets the interest rate strategy of a reserve
     * @param asset The address of the underlying asset of the reserve
     * @param rateStrategyAddress The new address of the interest strategy contract
     **/
    function setReserveInterestRateStrategyAddress(
        address asset,
        address rateStrategyAddress
    ) external onlyPoolAdmin {
        emit ReserveInterestRateStrategyChanged(asset, rateStrategyAddress);
    }

    /**
     * @dev pauses or unpauses all the actions of the protocol, including aToken transfers
     * @param val true if protocol needs to be paused, false otherwise
     **/
    function setPoolPause(bool val) external onlyEmergencyAdmin {
        emit MockCalled();
    }
}
