import Agave from './Agave.mjs'

const run = async () => {
  // create the vote
  //const agveToken = '0x3a97704a1b25F08aa230ae53B352e2e72ef52843'
  //await Agave.garden.addToken(agveToken)

  // wait for the vote to pass then
  const voteId = 0
  const voteCallData =
    '0x00000001853ad15ada188c43911d7c63c14b77c3d26dafa1000000640f3d5d970000000000000000000000003a97704a1b25f08aa230ae53b352e2e72ef5284300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001'
  await Agave.garden.executeVote(voteCallData, voteId)
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
