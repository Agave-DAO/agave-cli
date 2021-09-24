import inquirer from 'inquirer'
import { Input, Result } from '../types'

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
        ]
    },

    system: {
        type: 'list',
        name: 'system',
        choices: [
            { name: 'apps', value: 'apps' },
            { name: 'permissions', value: 'permissions' },
            { name: 'external contracts', value: 'external' }
        ]
    },
    apps: {
        type: 'list',
        name: 'apps',
        choices: [
            { name: 'agent:0', value: 'agent:0' },
            { name: 'agent:1', value: 'agent:0' },
            { name: 'conviction-voting', value: 'conviction-voting' },
            { name: 'disputable-voting', value: 'disputable-voting' },
            { name: 'token-manager', value: 'token-manager' },
            { name: 'token-manager', value: 'token-manager' },
            { name: 'acl', value: 'acl' }
        ]
    },
    user: {
        type: 'list',
        name: 'user',
        choices: ['sign agreement', 'stake tokens', 'vote']
    },
    external: {
        type: 'list',
        name: 'user',
        choices: []
    }
}

/*
            {name: 'agent:0', value: '0x1234'},
            {name: 'agent:1', value: '0x1234'},
            {name: 'conviction-voting', value: '0x1234'},
            {name: 'disputable-voting', value: '0x1234'},
            {name: 'token-manager', value: '0x1234'}},
            {name: 'token-manager', value: '0x1234'}},
            {name: 'acl', value: '0x1234'}'}
*/

const actions = {
    handle: async () => {


    },
    sendTx: async () => { console.log('test') },
    agent: async (input: Result) => {
        await commands.doAppPrompt(input.name, input.value)
        return 'main'
        // dao.getAddress()
    }

}

const commands = {
    doAppPrompt: async (app: string, address: string) => {
        console.log('do something with', app, address)
    }
}

const run = async () => {
    await promptRepl('main')
}

async function promptRepl(input: any) {
    
    console.log(input)
    console.log(menus[input])

    let responce: Input | Result
    
    // is the input a menu?
    menus.hasOwnProperty(input)
        ? responce = await inquirer.prompt(menus[input])
        : await (async () => {
            // handle command
            const name = input.split(':')[0]
            const res : Result = await inquirer.prompt(actions[name])
            promptRepl((responce[input]))
        })
    console.log(responce)
    await promptRepl((responce[input]))
}

run()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })


// When you're done
