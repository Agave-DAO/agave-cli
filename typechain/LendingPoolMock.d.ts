/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LendingPoolMockInterface extends ethers.utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "getAdmin()": FunctionFragment;
    "initReserve(address,address,address,address,address)": FunctionFragment;
    "isPaused()": FunctionFragment;
    "paused()": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setPoolPause(bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "getAdmin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initReserve",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPoolPause",
    values: [boolean]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPoolPause",
    data: BytesLike
  ): Result;

  events: {
    "Paused()": EventFragment;
    "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "Unpaused()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export class LendingPoolMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LendingPoolMockInterface;

  functions: {
    admin(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "admin()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getAdmin(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getAdmin()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initReserve(address,address,address,address,address)"(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isPaused(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "isPaused()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    paused(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "paused()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    setAdmin(
      _admin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPoolPause(
      _isPaused: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPoolPause(bool)"(
      _isPaused: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  getAdmin(overrides?: CallOverrides): Promise<string>;

  "getAdmin()"(overrides?: CallOverrides): Promise<string>;

  initReserve(
    _reserve: string,
    _aTokenAddress: string,
    _stableDebtAddress: string,
    _variableDebtAddress: string,
    _interestRateStrategyAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initReserve(address,address,address,address,address)"(
    _reserve: string,
    _aTokenAddress: string,
    _stableDebtAddress: string,
    _variableDebtAddress: string,
    _interestRateStrategyAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isPaused(overrides?: CallOverrides): Promise<boolean>;

  "isPaused()"(overrides?: CallOverrides): Promise<boolean>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  setAdmin(_admin: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setAdmin(address)"(
    _admin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPoolPause(
    _isPaused: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPoolPause(bool)"(
    _isPaused: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    getAdmin(overrides?: CallOverrides): Promise<string>;

    "getAdmin()"(overrides?: CallOverrides): Promise<string>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initReserve(address,address,address,address,address)"(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isPaused(overrides?: CallOverrides): Promise<boolean>;

    "isPaused()"(overrides?: CallOverrides): Promise<boolean>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    setAdmin(_admin: string, overrides?: CallOverrides): Promise<void>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolPause(_isPaused: boolean, overrides?: CallOverrides): Promise<void>;

    "setPoolPause(bool)"(
      _isPaused: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Paused(): EventFilter;

    ReserveDataUpdated(
      reserve: string | null,
      liquidityRate: null,
      stableBorrowRate: null,
      variableBorrowRate: null,
      liquidityIndex: null,
      variableBorrowIndex: null
    ): EventFilter;

    Unpaused(): EventFilter;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    "getAdmin()"(overrides?: CallOverrides): Promise<BigNumber>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initReserve(address,address,address,address,address)"(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isPaused(overrides?: CallOverrides): Promise<BigNumber>;

    "isPaused()"(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    setAdmin(_admin: string, overrides?: Overrides): Promise<BigNumber>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPoolPause(_isPaused: boolean, overrides?: Overrides): Promise<BigNumber>;

    "setPoolPause(bool)"(
      _isPaused: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAdmin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initReserve(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initReserve(address,address,address,address,address)"(
      _reserve: string,
      _aTokenAddress: string,
      _stableDebtAddress: string,
      _variableDebtAddress: string,
      _interestRateStrategyAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isPaused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAdmin(
      _admin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPoolPause(
      _isPaused: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPoolPause(bool)"(
      _isPaused: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}