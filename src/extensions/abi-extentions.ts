export = (fragment: any) => {
    let sig: string = ''
    sig += fragment.name + '('
    fragment.inputs.map((input: any) => {
        sig += input.type + ','
    })

    let res
    sig.charAt(sig.length - 1) === ','
        ? (res = sig.slice(0, -1) + ')')
        : (res = sig + ')')

    return res
}