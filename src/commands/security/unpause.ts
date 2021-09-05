import { Command } from '@oclif/command'
import cli from 'cli-ux'
import { LendingPoolConfigurator as LP } from '../../config'
import callSAB from '../../routes/callSAB'
import inquirer from 'inquirer'

export default class Unpause extends Command {
  static description = 'Unpause the protocol using the Security Board'

  async run() {
      static description = 'Unause the protocol using the Security Board'
    const rawArgs = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'pause',
        message: '⚠️ Unpause the protocol with the emergency agent?',
      },
    ])

    if (rawArgs.pause) {
      cli.action.start('Sending Transaction')
      await callSAB(LP, 'setPoolPause(bool)', [false])
      cli.action.stop('done')
    }
  }
}
