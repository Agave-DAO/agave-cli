// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendingPoolMock {
    bool frozen;
    address admin;

    struct reserve {
        address aTokenAddress;
        address stableDebtAddress;
        address variableDebtAddress;
        address interestRateStrategyAddress;
    }

    mapping (address => reserve) reserves;

     constructor() {
       frozen = true;
       admin = msg.sender;
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

    function setFrozen(bool _isFrozen) external {
        require(admin == msg.sender, "ERROR: NOT ADMIN");
        frozen = _isFrozen;
        if (frozen) {
            emit Paused();
        } else {
            emit Unpaused();
        }
    }

    function setAdmin(address _admin) external {
        require(admin == msg.sender, "ERROR: NOT ADMIN");
        admin = _admin;
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
