import { GluegunToolbox } from 'gluegun'
import { writeFileSync } from 'fs'
import config from '../../gardner.config.json'
import { prompt, Separator } from 'inquirer'
import ethereumRegex from 'ethereum-regex'

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.foo = () => {
    toolbox.print.info('called foo extension')
  }
  toolbox.contractsMenu = () => {
    const contracts = config.contracts
    const responce = Object.keys(contracts).map(key => {
      return {
        name: key,
        value: contracts[key]
      }
    })
    return responce
  }
  toolbox.saveContract = (name: string, address: string, abi: any) => {
    config.contracts[name] = {
      address,
      abi: JSON.parse(abi)
    }
    writeFileSync('./apiary.config.json', JSON.stringify(config))
  }
  toolbox.getContractMenu = async () => {
    let isNew: boolean = true
    let menu: any
    while (isNew) {
      menu = await prompt({
        type: 'list',
        name: 'contract',
        message: 'Available Contracts',
        choices: [
          ...toolbox.contractsMenu(),
          new Separator(),
          {
            name: toolbox.print.colors.bold.green('New Contract'),
            value: 'newContract'
          },
          new Separator()
        ]
      })
      if (menu.contract !== 'newContract') {
        isNew = false
      } else {
        const input: any = await prompt([
          {
            name: 'name',
            message: 'Enter contract name',
            type: 'input'
          },
          {
            name: 'address',
            message: 'Enter contract address',
            type: 'input',
            validate: (address: string) => {
              let test = ethereumRegex({ exact: true }).test(address)
              if (test) {
                return test
              }
              return 'Invalid address'
            }
          },
          {
            name: 'abi',
            message: 'Enter contract ABI',
            type: 'editor'
          }
        ])
        toolbox.saveContract(input.name, input.address, input.abi)
      }
    }
    return menu
  }

  toolbox.typeOfSigner = async () => {
    const type: any = await prompt({
      type: 'list',
      name: 'ofSigner',
      message: 'Send to DAO or sign with local account',
      choices: [
        {
          name: 'Agave Garden',
          value: 'DAO'
        },
        {
          name: 'Local Frame Account',
          value: 'EOA'
        }
      ]
    })
    return type.ofSigner
  }

  toolbox.sendTransaction = async (address, abi, type, func, args) => {
    const { callContractFrame, useFrame, callTaoAgent, getFuncSig } = toolbox
    const functionName = func.function.name
    let tx

    if (type === 'EOA') {
      tx = await callContractFrame(address, abi, functionName, args, useFrame())
    } else {
      tx = await callTaoAgent(
        useFrame(),
        getFuncSig(func.function),
        address,
        args,
        functionName
      )
    }
    return tx
  }

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "apiary" property),
  // apiary.config.json, etc.
}
