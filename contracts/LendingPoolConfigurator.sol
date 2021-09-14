// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendingPoolMock {
    bool public paused;
    address public admin;

    struct reserve {
        address aTokenAddress;
        address stableDebtAddress;
        address variableDebtAddress;
        address interestRateStrategyAddress;
    }

    mapping(address => reserve) reserves;

    constructor(address _admin) {
        paused = false;
        admin = _admin;
    }

    ///////////////////////////////////////////////////////////////////////////////

    event ReserveDataUpdated(
        address indexed reserve,
        uint256 liquidityRate,
        uint256 stableBorrowRate,
        uint256 variableBorrowRate,
        uint256 liquidityIndex,
        uint256 variableBorrowIndex
    );

    event Paused();

    event Unpaused();

    ///////////////////////////////////////////////////////////////////////////////

    function setPoolPause(bool _isPaused) external {
        require(admin == msg.sender, 'ERROR: NOT ADMIN');
        paused = _isPaused;
        if (paused) {
            emit Paused();
        } else {
            emit Unpaused();
        }
    }

    function setAdmin(address _admin) external {
        require(admin == msg.sender, 'ERROR: NOT ADMIN');
        admin = _admin;
    }

    function getAdmin() external view returns (address) {
        return admin;
    }

    function isPaused() external view returns (bool) {
        return paused;
    }

    function initReserve(
        address _reserve,
        address _aTokenAddress,
        address _stableDebtAddress,
        address _variableDebtAddress,
        address _interestRateStrategyAddress
    ) external {
        reserve storage r = reserves[_reserve];
        r.aTokenAddress = _aTokenAddress;
        r.stableDebtAddress = _stableDebtAddress;
        r.variableDebtAddress = _variableDebtAddress;
        r.interestRateStrategyAddress = _interestRateStrategyAddress;

        emit ReserveDataUpdated(_reserve, 0, 0, 0, 0, 0);
    }
}
