import { GluegunToolbox } from 'gluegun'
import { prompt } from 'inquirer'

module.exports = {
  name: 'gardner',
  alias: ['g'],
  description: 'Call Contract from Agave Garden or EOA',
  run: async (toolbox: GluegunToolbox) => {
    const {
      getFunctions,
      getFunctionArgs,
      useFrame,
      getContractMenu,
      typeOfSigner,
      sendTransaction
    } = toolbox

    // displays contracts menu, returns contract address and abi
    const menu = await getContractMenu()
    const abi = menu.contract.abi
    const address = menu.contract.address

    // displays functions menu, returns function name, fragment and args
    const func = await getFunctions(abi)
    const functionName = func.function.name
    const args = await getFunctionArgs(func.function)

    // is the transaction going to be sent from the DAO or the local frame account
    const type = await typeOfSigner()

    // displays the action
    toolbox.print.table(
      [
        ['signer', type],
        ['contract', address],
        ['function', functionName],
        ...args.map(arg => ['argument', arg])
      ],
      { format: 'lean' }
    )

    // ask confirm
    const execute: any = await prompt({
      type: 'confirm',
      name: 'action',
      message: 'Send Transaction'
    })

    if (execute.action === true) {
      const spinner = toolbox.print.spin('Sending Transaction...')

      try {
        // sends the transaction
        const tx = await sendTransaction(address, abi, type, func, args)
        spinner.succeed('Done!')
        console.log(
          tx._isBigNumber ? console.log(tx.toString()) : console.log(tx)
        )
        process.exit(0)
      } catch (error) {
        // if the error is due to a failed TX
        if (error.status !== undefined) {
          spinner.stopAndPersist({ symbol: '🚨', text: error.reason })
          const signer = useFrame()
          const network = (await signer.provider._networkPromise).name

          toolbox.print.table(
            [
              ['Code', error.code],
              ['Status', error.status],
              ['Tx Hash', error.transactionHash]
            ],
            { format: 'lean' }
          )
          toolbox.print.error(
            `https://dashboard.tenderly.co/tx/${network}/${error.transactionHash}`
          )
        } else {
          spinner.stopAndPersist({ symbol: '🚨', text: 'ERROR!\n' })
          console.error(error)
        }
        process.exit(1)
      }
    }
  }
}
