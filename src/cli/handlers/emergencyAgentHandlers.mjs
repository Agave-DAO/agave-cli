import scripts from '../../scripts/index.mjs'

export const emergencyAgentHandlers = {
    pause: async (params) => {
        if (params.pause) {
            await scripts.emergencyAgent.pauseProtocol(true)
        }
    },
    unpause: async (params) => {
        if (params.unpause) {
            await scripts.emergencyAgent.pauseProtocol(false)
        }
    },
}
