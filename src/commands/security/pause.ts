import { Command } from '@oclif/command'
import cli from 'cli-ux'
import { LendingPoolConfigurator as LP } from '../../config'
import callSAB from '../../routes/callSAB'
import inquirer from 'inquirer'

export default class Pause extends Command {
  static description = 'Pause the protocol using the Security Board'

  async run() {
    const rawArgs = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'pause',
        message: '⚠️ Pause the protocol with the emergency agent?',
      },
    ])

    if (rawArgs.pause) {
      cli.action.start('Sending Transaction')
      await callSAB(LP, 'setPoolPause(bool)', [true])
      cli.action.stop('done')
    }
  }
}
