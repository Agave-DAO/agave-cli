import inquirer from 'inquirer';
import TreePrompt from 'inquirer-tree-prompt';

inquirer.registerPrompt('tree', TreePrompt);

async function getAppsMenu(daoAddress: string) {
    return [
        {
            name: 'disputable-voting',
            value: ['apps', 'disputable-voting']
        },
        {
            name: 'agent:0',
            value: ['apps', 'disputable-voting']
        },
        {
            name: 'agent:1',
            value: ['apps', 'disputable-voting']
        },
        {
            name: 'conviction-voting',
            value: ['apps', 'disputable-voting']
        },
        {
            name: 'agreements',
            value: ['apps', 'disputable-voting']
        }
    ]
}
async function getStoredContracts() {
    return [{
        value: [
            {
                name: 'LendingPool',
                value: ['contracts', 'LendingPool']
            },
            {
                name: 'AddressProvider',
                value: ['contracts', 'AddressProvider']
            },
            {
                name: '1hive:TAO-Voting',
                value: ['contracts', 'LendingPool']
            },
            {
                name: '1hive:conviction-voting',
                value: ['contracts', 'LendingPool']
            },
            {
                name: 'DxDaoRouter',
                value: ['contracts', 'LendingPool']
            }
        ]
    }]
}

interface DAO {
    name: string
    address: string
}

async function mainMenu(dao: DAO) {

    const menuPrompt = [
        {
            type: 'tree',
            name: 'menu',
            message: 'Gardner Commands',
            tree: [
                {
                    value: "System Commands",
                    children: [
                        {
                            value: "apps",
                            children: await getAppsMenu('0x1234')
                        },
                        {
                            value: "Permissions",
                            children: [
                                { name: "Print Permissions Table" },
                                { name: "Create" },
                                { name: "Add" },
                                { name: "Remove" }
                            ]
                        },
                    ]
                },
                {
                    value: "User Commands",
                    children: [
                        { name: "Sign Agreement" },
                        { name: "Stake" },
                        { name: "Vote" }
                    ]
                },
                {
                    value: "External Contracts",
                    children: await getStoredContracts()
                }
            ]
        }
    ]

    const answers = await inquirer.prompt(menuPrompt)
    console.log(answers)

}

mainMenu({
    name: 'Agave',
    address: '0x1234'
})
    .then(() => process.exit(0))
    .catch(e => {
        console.error(e)
        process.exit(1)
    })

