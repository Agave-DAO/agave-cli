import inquirer from 'inquirer'
import commands  from './commands/index'
import { menus } from './menus'

async function promptRepl(input: any) {
    input === 'quit' ? process.exit(0) : null

    let answer: object
    if (menus.hasOwnProperty(input)) {
        answer = await inquirer.prompt(menus[input])
        await promptRepl((answer[input]))
    } else {
        answer = await commands[input]()
        await promptRepl(answer)
    }
}

(async () => await promptRepl('main'))()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })

