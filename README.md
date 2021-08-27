# Agave DAO Scripts

> a set of scripts for creating and executing evm based votes in the Agave DAO

<br/>

## 🏃🏾‍♂️ Quick Start

1. Install [Frame](https://frame.sh) and set up a signer (hardware wallets work great)
2. ensure your signer has collatoral deposited in the DAO and signed the agreement
3. clone this repo and insall with `yarn`
4. run a script from the `package.json` for example `yarn run pause-lending` make a note of the call data logged to the console. you will need it after the vote passes
5. once the vote has passed run `yarn execute-vote <VOTE_CALLDATA> <VOTE_ID>` you can find the vote id in the UI

## 🆘 Help
These EVM Scripts are rough around the edges! If you have any questions ask in [discord](https://discord.gg/)
