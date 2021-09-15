# Agave Garden Governance Scripts

Set of scripts to change parameters in the protocol and generate the subsequent votes in the DAO

## Installation

```
yarn 
npx hardhat compile
```

## Shorthand and Autocomplete

```
npm i -g hardhat-shorthand
hardhat-completion install
```

## Run task
```
hh <HARDHAT_TASK> --network <NETWORK>
```


## Available Functionalities
> current avalable
```
  emergency:pause            	Pauses the protocol
  emergency:unpause          	Unpauses the protocol
  flatten                    	Flattens and prints contracts and their dependencies
  help                       	Prints this message
  lpc:activate-res           	Activate Reserve asset
  lpc:config-res-as-collat   	Configure a reserve as collatoral
  lpc:deactivate-res         	Deactivate Reserve asset
  lpc:disable-borrow-on-res  	Disable borrowing on reserve asset
  lpc:disable-res-stable-rate	Disable reserve stable rate
  lpc:enable-borrow-on-res   	Ensable borrowing on reserve asset
  lpc:enable-res-stable-rate 	Enable reserve stable rate
  lpc:freeze-res             	Freeze Reserve asset
  lpc:set-res-factor         	Set reserve factor
  lpc:set-res-interest-strat 	Set reserve interest rate strategy address
  lpc:unfreeze-res           	Unfreeze Reserve asset
```

