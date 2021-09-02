import scripts from '../../scripts/index.mjs'

export const emergencyAgentHandlers = {
    pause: async (params) => {
        if (params.pause) {
            await scripts.protocol.pauseProtocol([true])
        }
    },
    unpause: async (params) => {
        if (params.unpause) {
            await scripts.protocol.pauseProtocol([false])
        }
    },
}
