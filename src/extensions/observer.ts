import inquirer from 'inquirer'
import chalk from 'chalk'

const menus = {
    main: {
        type: 'list',
        name: 'main',
        choices: [
            {
                name: 'system', value: 'system'
            },
            {
                name: 'user', value: 'system'
            },
            {
                name: 'external contracts', value: 'contracts'
            },
            new inquirer.Separator(),
            {
                name: chalk.red('quit'), value: 'quit' 
            },
            new inquirer.Separator()
        ]
    },

    system: {
        type: 'list',
        name: 'system',
        choices: [
            { name: 'apps', value: 'apps' },
            { name: 'permissions', value: 'permissions' },
            { name: 'external contracts', value: 'contracts' }
        ]
    },
    user: {
        type: 'list',
        name: 'user',
        choices: [
            {
                name: 'sign agreement',
                value: 'sign'
            },
            {
                name: 'stake tokens',
                value: 'stake'
            },
            { name: 'vote', value: 'vote' }]
    }
}

const commands = {
    apps: async (input) => {
        console.log('apps', input)
        return 'main'
    },
    permissions: async (input) => {
        console.log('permissions', input)
        return 'main'
    },
    contracts: async (input) => {
        console.log('contracts', input)
        return 'main'
    },
    sign: async (input) => {
        console.log('sign', input)
        return 'main'
    },
    stake: async (input) => {
        console.log('stake', input)
        return 'main'
    },
    vote: async (input) => {
        console.log('vote', input)
        return 'main'
    },
}

async function promptRepl(input: any) {

    input === 'quit' ? process.exit(0) : null

    let answer
    // is the input a menu or command
    if (menus.hasOwnProperty(input)) {
        answer = await inquirer.prompt(menus[input])
        await promptRepl((answer[input]))
    } else {
        answer = await commands[input]()
        await promptRepl(answer)
    }
}

const run = async () => {
    await promptRepl('main')
}



run()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })

