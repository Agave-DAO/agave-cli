const pauseProtocol = [{
    type: 'confirm',
    name: 'pause',
    message: '⚠️ Pause the protocol with the emergency agent?',
  }]

const unpauseProtocol = [{
    type: 'confirm',
    name: 'unpause',
    message: '⚠️ Unpause the protocol with the emergency agent?',
  }]

export default {
  pauseProtocol,
  unpauseProtocol
}