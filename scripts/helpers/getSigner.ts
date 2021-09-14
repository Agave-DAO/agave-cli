import { ethers } from 'ethers'
import ethProvider from 'eth-provider'


const frame = () => {
  const provider = new ethers.providers.Web3Provider(ethProvider())
  const signer = provider.getSigner()
  return signer
}


export default frame
