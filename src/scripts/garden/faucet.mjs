import { ethers } from 'ethers'
import frame from '../../lib/getFrame.mjs'

const faucet = async (amount) => {
  const signer = frame()

  const tokenAddress = '0x68ea056d4fb87147a9a237c028b6b1476bf7b367'
  const token = new ethers.Contract(
    tokenAddress,
    ['function mint(address to, uint256 amount) public'],
    signer
  )
  await token.mint(ethers.fromEther(amount))
}

export default faucet
