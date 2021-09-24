import inquirer from "inquirer"
import { validateAddress } from "../extensions/web3-extentions"
import chalk from "chalk"
import { Input } from "../types"


const getFunctionArgs = async (func: any) => {
    const result = []
    for (const arg in func.inputs) {
      result.push(await getArgument(func.inputs[arg], []))
    }
    return result
  }


const getArgument = async (input: Input, args: Array<any>) => {
    let answer: any

    // create prompt based on data type
    answer = await inquirer.prompt(dataTypePrompt(input))

    // if array, continue asking for args until user is
    if (isArray(input)) {
        const repeat: any = await addAnother(input)
        if (repeat.again === true) {
            args.push(answer[input.name])
            await getArgument(input, args)
        } else {
            args.push(answer[input.name])
        }
    }

    // only return an array if more than one arg
    if (args.length > 0) {
        return args
    } else {
        return answer[input.name]
    }
}

const dataTypePrompt = (input: Input) => {
    let baseQuestion: any = {
        name: input.name,
        message: input.name,
        type: 'input'
    }

    // create prompt based on data type
    isTuple(input) ? console.log('TODO')
        : isBool(input) ? baseQuestion.type = 'confirm'
            : isAddress(input) ? baseQuestion.validate = validateAddress()
                : null

    return baseQuestion
}

async function addAnother(input: any) {
    return inquirer.prompt({
        name: 'again',
        message: `add another ${chalk.greenBright.bold(
            input.name
        )} item to ${chalk.greenBright.bold(input.type)}`,
        type: 'confirm'
    })
}

function isTuple(input) {
    return (input.type.substring(0, 5) === 'tuple')
}
function isBool(input) {
    return (input.type.substring(0, 4) === 'bool')
}
function isAddress(input) {
    return (input.type.substring(0, 7) === 'address')
}
function isArray(input) {
    return (input.type.slice(-2) === '[]')
}

export default getFunctionArgs