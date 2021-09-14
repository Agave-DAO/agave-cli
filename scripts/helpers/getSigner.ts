import { ethers } from 'hardhat'
import { ethProvider } from 'eth-provider'
import { Signer } from 'ethers'

const frame = () => {
  const provider = new ethers.providers.Web3Provider(ethProvider())
  const signer = provider.getSigner()
  return signer
}

const getSigner = async (useFrame: Boolean) => {
  let signer: Signer;
  (useFrame) ? signer = frame() : signer = (await ethers.getSigners())[0]
  return signer
}

export default getSigner
