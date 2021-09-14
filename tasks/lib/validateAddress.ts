import ethereumRegex from 'ethereum-regex'

export default {
    address: (address: string) => {
        const test = ethereumRegex({ exact: true }).test(address)
        if (test) {
            return test
        }
        return 'Invalid address'
    },
}
