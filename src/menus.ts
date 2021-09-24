import inquirer from 'inquirer';
import chalk from 'chalk';

export const menus = {
    main: {
        type: 'list',
        name: 'main',
        choices: [
            {
                name: 'system', value: 'system'
            },
            {
                name: 'user', value: 'user'
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
            { name: 'vote', value: 'vote' }
        ]
    },
    contracts: {
        type: 'list',
        name: 'contracts',
        choices: [
            {
                name: 'call contract',
                value: 'callContract'
            },
            {
                name: 'run simulation',
                value: 'simulation'
            }
        ]
    }
};
