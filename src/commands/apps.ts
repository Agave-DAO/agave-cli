import inquirer from "inquirer"
import { getDaoCache, getDaoContext } from "../extensions/crispr-extentions"


export default async () => {
    console.log('inside command')
    const cache = await getDaoCache(3)
    //const daoContext = await getDaoContext(cache)
    const selectedApp = await inquirer.prompt({
        name: 'apps',
        type: 'list',
        choices: appsPrompt(cache)
    })

    console.log(selectedApp)
    return 'main'
}

const appsPrompt = cache => {
    const prompt = []
    for (let [key, value] of cache) {
        prompt.push({
            name: key,
            value: value.abi
        })
    }
    return prompt
}