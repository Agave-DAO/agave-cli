import Agave from '../../scripts/Agave.mjs'

export const emergencyAgentHandlers = {
  pause: async (params) => {
    if (params.pause) {
      await Agave.emergencyAgent.pauseProtocol(true)
    }
  },
  unpause: async (params) => {
    if (params.unpause) {
      await Agave.emergencyAgent.pauseProtocol(false)
    }
  },
}
