const axios = require("axios");
import report from 'yurnalist'

(async () => {
    const username = "greenhornet";
    const project = "tt";
    const apiKey = "TDIMGwjyMpFTi9O-ETwJFpxgZmEK3tLM";
    let forkID
    let root

    axios.defaults.headers.common = {
        "X-Access-Key": apiKey,
    };

    // 1. get a new simulation
    const newSimulation = await axios({
        method: "post",
        url: `https://api.tenderly.co/api/v1/account/${username}/project/${project}/fork/`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            network_id: "4",
            block_number: 9350000
        },
    })

    // 2. set the forkId
    forkID = newSimulation.data.simulation_fork.id

    // because the first 
    root = forkID
    report.info(root)

    // 3. simulate a transaction
    // Question: is this forkID in the URL supposed to stay the same through all the transactions
    // or is it supposed to be id of the last transaction?
    const firstTx = await axios({
        method: "post",
        url: `https://api.tenderly.co/api/v1/account/${username}/project/${project}/fork/${forkID}/simulate`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            "from": "0x1E739B75473DF4DaD24Ea68d14a78C093aFe598E",
            "to": "0x8ad82450cb3c8bac5b4357b3c2a2a249212b84cd",
            "input": "0xef690cc0",
            "gas": 8522744,
            "gas_price": "0",
            "value": 0,
            "save": true,
            root
        },
    })

    // 4. update root
    root = firstTx.data.simulation.id
    report.info(root)

    //5. try to skip blocks
    const skipBlocks = await axios({
        method: "put",
        url: `https://api.tenderly.co/api/v1/account/${username}/project/${project}/fork/${forkID}`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            "jsonrpc": "2.0",
            "method": "evm_increaseBlocks",
            "params": ["0x20"],
            "id": "1234"
        },
    })

    root = skipBlocks.data.simulation_fork.id

    const secondTx = await axios({
        method: "post",
        url: `https://api.tenderly.co/api/v1/account/${username}/project/${project}/fork/${root}/simulate`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            "from": "0x4999038708A3681D6647E666233a6a3044743bc7",
            "to": "0x3741cd9cfd9903168eb15416b3d3c4d6a757b41d",
            "gas": 8522744,
            "gas_price": "10",
            "value": 1,
            "save": true,
            root
        },
    })

    root = secondTx.data.simulation.id
    report.info(root)


})()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });



// const createSim = async (username, project, tenderlyKey, options = {}) => {
//     axios.defaults.headers.common = {
//         "X-Access-Key": tenderlyKey,
//     };

//     const config = {
//         method: "post",
//         url: `https://api.tenderly.co/api/v1/account/${username}/project/${project}/fork/`,
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: options,
//     };

//     return (await axios(config));
// };

// const simulate = async (username, project, tenderlyKey, forkId, data) => {
//     axios.defaults.headers.common = {
//         "X-Access-Key": tenderlyKey,
//     };

//     const config = {
//         method: "post",
//         url: `https://api.tenderly.co/api/v1/account/${username}/project/${project}/fork/${forkId}/simulate`,
//         headers: {
//             "Content-Type": "application/json",
//         },
//         data: data,
//     };

//     return await axios(config);
// };

// const run = async () => {
//     const resp = []
//     let sim

//     const username = "greenhornet";
//     const project = "tt";
//     const apiKey = "TDIMGwjyMpFTi9O-ETwJFpxgZmEK3tLM";
//     //let id;
//     //let block_number;

//     sim = await createSim(username, project, apiKey, {
//         network_id: "1",
//         block_number: 9350000
//     })
//     resp.push(sim)
//     const forkId = sim.data.simulation_fork.id
//     report.info(forkId)

//     sim = await simulate(username, project, apiKey, forkId, {
//         jsonrpc: "2.0",
//         method: "evm_increaseBlocks",
//         params: [123456],
//         id: "1234",
//         from: "0x1E739B75473DF4DaD24Ea68d14a78C093aFe598E",
//         to: "0x8ad82450cb3c8bac5b4357b3c2a2a249212b84cd",
//         input: "0xef690cc0",
//         gas: 8522744,
//         gas_price: "0",
//         value: 0,
//         save: true,
//         root: forkId,
//     })
//     let lastId = sim.data.simulation.id
//     report.info(lastId)

//     sim = await simulate(username, project, apiKey, forkId, {
//         jsonrpc: "2.0",
//         method: "evm_increaseBlocks",
//         params: [123456],
//         id: "1234",
//         from: "0x1E739B75473DF4DaD24Ea68d14a78C093aFe598E",
//         to: "0x8ad82450cb3c8bac5b4357b3c2a2a249212b84cd",
//         input: "0xef690cc0",
//         gas: 8522744,
//         gas_price: "0",
//         value: 0,
//         save: true,
//         root: lastId,
//     })
//     lastId = sim.data.simulation.id
//     report.info(lastId)



// }
// run()
