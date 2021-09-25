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

export default async () => {
    console.log('inside command')
    return 'main'
}
