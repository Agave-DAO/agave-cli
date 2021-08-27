import { ethers } from 'ethers'
import frame from '../../lib/getFrame.mjs'

const run = async () => {
  const signer = frame()

  const tokenAddress = '0x68ea056d4fb87147a9a237c028b6b1476bf7b367'
  const token = new ethers.Contract(
    tokenAddress,
    ['function mint(address to, uint256 amount) public'],
    signer
  )
  await token.mint('0x' + 'F'.repeat(40), (1e18).toString())
}

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
