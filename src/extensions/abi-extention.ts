import { GluegunToolbox } from 'gluegun'
import { prompt, QuestionCollection } from 'inquirer'
import chalk from 'chalk'
import ethereumRegex from 'ethereum-regex'
import { Input } from '../types'
function isTuple(input) {
  return (input.type.substring(0, 5) === 'tuple')
}
function isBool(input) {
  return (input.type.substring(0, 4) === 'bool')
}
function isAddress(input) {
  return (input.type.substring(0, 5) === 'address')
}
function isArray(input) {
  return (input.type.substring(0, 7) === 'tuple')
}

module.exports = async (toolbox: GluegunToolbox) => {


  function validateAddress() {
    return (address: string) => {
      let test = ethereumRegex({ exact: true }).test(address)
      if (test) {
        return test
      }
      return 'Invalid address'
    }
  }

  toolbox.inputPromptBuilder = async (input: Input) => {
    const recursiveFunction = async (input: Input, resp: Array<any>) => {
      let baseQuestion: QuestionCollection = {
        name: input.name,
        message: input.name,
        type: 'input'
      }

      let answer: string | Array<any> | Object

      isTuple(input) ? console.log('TODO')
        : isBool(input) ? answer = await prompt({...baseQuestion,type: 'confirm'})
        : isAddress(input) ? answer = await prompt({...baseQuestion,validate: validateAddress()})
        : answer = await prompt(baseQuestion)


      // call recursive function
      

      if (isArray(input)) {
        const repeat: any = await prompt({
          name: 'repeat',
          message: `add another ${chalk.greenBright.bold(
            input.name
          )} item to ${chalk.greenBright.bold(input.type)}`,
          type: 'confirm'
        })
        if (repeat.repeat === true) {
          resp.push(answer[input.name])
          await recursiveFunction(input, resp)
        } else {
          resp.push(answer[input.name])
        }
      }

      // if there is an array, then return that else return the single field
      if (resp.length > 0) {
        return resp
      } else {
        return answer[input.name]
      }
    }

    const result = await recursiveFunction(input, [])
    return result
  }
  toolbox.getFunctionArgs = async (func: any) => {
    const result = []
    for (const i in func.inputs) {
      result.push(await toolbox.inputPromptBuilder(func.inputs[i]))
    }
    return result
  }
  toolbox.buildTuplePrompt = async (input: Input) => {
    return [{ name: 'TODO', type: 'TODO', message: 'TODO' }]
  }
  toolbox.validateAddress = async (address: string) => {
    let test = ethereumRegex({ exact: true }).test(address)
    if (test) {
      return test
    }
    return 'Invalid address'
  }
  toolbox.getFunctions = async (abi: Array<any>) => {
    const prompts: Array<any> = []
    abi
      .filter(e => {
        return e.type === 'function'
      })
      .map(e => {
        let n: string = ''
        if (e.inputs.length !== 0) {
          n += e.name + '('
          e.inputs.map((input: any) => {
            n += input.type + ','
          })
          prompts.push({ name: n.slice(0, -1) + ')', value: e })
        } else {
          prompts.push({ name: e.name, value: e })
        }
      })
    const func = await prompt({
      type: 'list',
      name: 'function',
      message: 'Avalible functions',
      choices: prompts
    })
    return func
  }
  toolbox.getFuncSig = (fragment: any) => {
    let n: string = ''
    n += fragment.name + '('
    fragment.inputs.map((input: any) => {
      n += input.type + ','
    })

    let res
    n.charAt(n.length - 1) === ','
      ? (res = n.slice(0, -1) + ')')
      : (res = n + ')')

    return res
  }
}
