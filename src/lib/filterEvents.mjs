const filterContractEvents = (contract, selectedFilter, transactionHash) => {
    return new Promise((resolve, reject) => {
        const filter = contract.filters[selectedFilter]

        if (!filter) {
            reject(
                new Error(`Selected filter ${selectedFilter} doesn't exists`)
            )
        }

        contract
            .queryFilter(filter())
            .then((events) => {
                if (transactionHash) {
                    const filteredEvent = events.filter(
                        (event) => event.transactionHash === transactionHash
                    )
                    resolve(filteredEvent[0]?.args)
                } else {
                    resolve(events)
                }
            })
            .catch((err) => reject(err))
    })
}

export default filterContractEvents
