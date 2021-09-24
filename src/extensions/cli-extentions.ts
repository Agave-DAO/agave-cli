import Table from 'cli-table3'
export const table = (signer, contract, func, args) => {
    const t = new Table()
    let i = 0
    t.push(
        ['Executor', signer],
        ['Contract', contract],
        ['Function', func],
        ...args.map(arg => {i++; return [`arg: ${i}`, arg]})
    )
    return t
}